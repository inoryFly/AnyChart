goog.provide('anychart.ganttModule.calendar.Calendar');


//region -- Requirements.
goog.require('anychart.core.Base');
goog.require('anychart.format');
goog.require('anychart.utils');

goog.require('goog.array');
goog.require('goog.date.Interval');
goog.require('goog.date.UtcDateTime');
goog.require('goog.object');


//endregion
//region -- Constructor.
/**
 * Gantt chart specific calendar class.
 * @constructor
 * @extends {anychart.core.Base}
 */
anychart.ganttModule.calendar.Calendar = function() {
  anychart.resourceModule.Calendar.base(this, 'constructor');

  /**
   * Internal normalized representation of working schedule.
   *
   * @type {?Array.<?anychart.ganttModule.calendar.Calendar.DailyWorkingSchedule>}
   * @private
   */
  this.schedule_ = null;

  /**
   * Internal normalized representation of holidays.
   *
   * @type {?Array.<anychart.ganttModule.calendar.Calendar.Holiday>}
   * @private
   */
  this.holidays_ = null;

  /**
   * Internal processed holidays data.
   * Used for quick calculations of working schedule.
   *
   * @type {anychart.ganttModule.calendar.Calendar.HolidaysData}
   * @private
   */
  this.holidaysData_ = {
    yearly: {},
    custom: {}
  };

  var locale = anychart.format.getDateTimeLocale(anychart.format.outputLocale());

  /**
   * Weekend range taken from locale.
   *
   * NOTE: locale weekend range is represented as array of two numbers.
   * First number is weekend start, second one is weekend end.
   * This way presumes that weekend is is exactly the range: weekend can't be
   * monday and friday. This is a difference between this.localeWeekendRange_
   * and this.actualWeekends_.
   *
   * @type {Array.<number>}
   * @private
   */
  this.localeWeekendRange_ = goog.array.clone(locale['weekendRange']);

  /**
   * Actual weekends. Can be overridden by working schedule.
   *
   * NOTE: this.actualWeekends_ is an array of exact holidays set:
   * [1, 3, 5] means that monday, wednesday and friday are weekend days,
   * this is a difference between this.actualWeekends_ and this.localeWeekendRange_.
   *
   * @type {Array.<number>}
   * @private
   */
  this.actualWeekends_ = this.turnWeekendRangeToExactDays_(this.localeWeekendRange_);

  /**
   * Daily info cache.
   *
   * @type {Object.<anychart.ganttModule.calendar.Calendar.DailyScheduleData>}
   * @private
   */
  this.dailyCache_ = {};
};
goog.inherits(anychart.ganttModule.calendar.Calendar, anychart.core.Base);


//endregion
//region -- Supported signals.
/**
 * Supported signals.
 *
 * @type {number}
 */
anychart.ganttModule.calendar.Calendar.prototype.SUPPORTED_SIGNALS = anychart.Signal.NEEDS_REAPPLICATION;


//endregion
//region -- Type definitions.
/**
 * @typedef {{
 *  from: number|undefined,
 *  to: number|undefined
 * }}
 */
anychart.ganttModule.calendar.Calendar.DailyWorkingSchedule;

/**
 * @typedef {{
 *  day: number,
 *  month: number,
 *  year: number|undefined,
 *  label: string|undefined
 * }}
 */
anychart.ganttModule.calendar.Calendar.Holiday;


/**
 * @typedef {{
 *  yearly: Object,
 *  custom: Object
 * }}
 */
anychart.ganttModule.calendar.Calendar.HolidaysData;

/**
 * @typedef {{
 *  isWeekend: boolean,
 *  isHoliday: boolean,
 *  workingIntervals: Array.<anychart.ganttModule.calendar.Calendar.DailyWorkingSchedule>,
 *  notWorkingIntervals: Array.<anychart.ganttModule.calendar.Calendar.DailyWorkingSchedule>,
 *  start: number,
 *  end: number
 * }}
 */
anychart.ganttModule.calendar.Calendar.DailyScheduleData;


//endregion
//region -- Internal and private API.
/**
 * Drops cache on any schedule changes.
 *
 * @private
 */
anychart.ganttModule.calendar.Calendar.prototype.dropCache_ = function() {
  this.cache_ = {};
};


/**
 * Drops holidays data on any holidays changes.
 * TODO (A.Kudryavtsev): Yes, it's kind of code duplication (@see constructor), but here I let it be.
 *
 * @private
 */
anychart.ganttModule.calendar.Calendar.prototype.dropHolidaysData_ = function() {
  this.holidaysData_ = {
    yearly: {},
    custom: {}
  };
  this.dropCache_();
};

/**
 * Turns weekend range like [3, 6] to exact weekends like [3, 4, 5, 6].
 *
 * @param {Array.<number>} range - Weekend range.
 * @return {Array.<number>} - Exact weekends.
 * @private
 */
anychart.ganttModule.calendar.Calendar.prototype.turnWeekendRangeToExactDays_ = function(range) {
  var weekendStart = range[0];
  var weekendEnd = range[1];
  var rv = [];

  for (var i = weekendStart; i <= weekendEnd; i++) {
    rv.push(i);
  }

  return rv;
};


/**
 *
 * @param {anychart.ganttModule.calendar.Calendar.DailyWorkingSchedule} val - Day to check.
 * @private
 * @return {?anychart.ganttModule.calendar.Calendar.DailyWorkingSchedule}
 */
anychart.ganttModule.calendar.Calendar.prototype.normalizeValidWorkingDay_ = function(val) {
  if (goog.typeOf(val) === 'object' && ('from' in val) && ('to' in val)) {
    var from = +val['from'];
    var to = +val['to'];

    // This comparison considers NaN values.
    if (from < to && (from >= 0 && from <= 23) && (to >= 0 && to <= 23)) {
      // TODO (A.Kudryavtsev): Should we round these values?
      return {
        'from': from,
        'to': to
      }
    }
  }
  return null;
};

/**
 *
 * @param {anychart.ganttModule.calendar.Calendar.Holiday} holiday - Single holiday config object.
 * @return {?anychart.ganttModule.calendar.Calendar.Holiday} - Normalized holiday object.
 *  Returns null if here are some unacceptable values.
 * @private
 */
anychart.ganttModule.calendar.Calendar.prototype.normalizeSingleHoliday_ = function(holiday) {
  if (goog.typeOf(holiday) === 'object' && ('day' in holiday) && ('month' in holiday)) {
    var day = +holiday['day'];
    var month = +holiday['month'];

    if (!isNaN(day) && (month >= 0 && month < 12)) { // Month comparison also considers NaNs.
      // TODO (A.Kudryavtsev): Should we round these values?
      var rv = {
        'day': day,
        'month': month
      };

      if ('year' in holiday) {
        var year = +holiday['year'];
        if (!isNaN(year)) {
          rv['year'] = year;
        }
      }

      if ('label' in holiday) {
        rv['label'] = String(holiday['label']);
      }

      return rv;
    }
  }
  return null;
};


/**
 * TODO (A.Kudryavtsev): JSDoc.
 *
 * @param {Array.<?anychart.ganttModule.calendar.Calendar.DailyWorkingSchedule>} schedule - Working
 *  schedule to be normalized.
 * @return {?Array.<?anychart.ganttModule.calendar.Calendar.DailyWorkingSchedule>} - Normalized
 *  schedule or null for miss-configuration case.
 * @private
 */
anychart.ganttModule.calendar.Calendar.prototype.normalizeWorkingSchedule_ = function(schedule) {
  if (goog.typeOf(schedule) === 'array') {
    var rv = [];
    for (var i = 0; i < 7; i++) { // Iterating 0..6 days of week for utc-day, 0 is Sunday, 6 is Saturday.
      var scheduleDay = schedule[i];
      var day = this.normalizeValidWorkingDay_(scheduleDay);
      rv.push(day); // day can be null.
    }
    return rv.length ? rv : null;
  }
  return null;
};


/**
 * Normalizes holidays values.
 *
 * @param {Array.<anychart.ganttModule.calendar.Calendar.Holiday>} holidays - Raw holidays data.
 * @private
 */
anychart.ganttModule.calendar.Calendar.prototype.normalizeHolidays_ = function(holidays) {
  if (goog.typeOf(holidays) === 'array') {
    var rv = [];
    for (var i = 0; i < holidays.length; i++) {
      var holiday = holidays[i];
      var day = this.normalizeSingleHoliday_(holiday);
      if (day) {
        rv.push(day);
      }
    }
    return rv.length ? rv : null;
  }
  return null;
};


/**
 * Defines actual weekend range.
 * Method must be called after new used schedule is defined.
 *
 * @private
 */
anychart.ganttModule.calendar.Calendar.prototype.defineWeekendRange_ = function() {
  if (this.schedule_) {
    for (var i = 0; i < this.schedule_.length; i++) {
      var day = this.schedule_[i];
      if (!day) { // null in normalized this.schedule_ is a weekend.
        this.actualWeekends_.push(i);
      }
    }
  } else {
    this.actualWeekends_ = this.turnWeekendRangeToExactDays_(this.localeWeekendRange_);
  }
};


/**
 * Collects and builds structure of this.holidaysData_.
 * Will contain records like
 *  {code}
 *    this.holidaysData_ = {
 *      yearly: {
 *        '2-15': true, // Each year 15 Mar is holiday.
 *        '10-2': true  // Each year 02 Nov is holiday.
 *      },
 *      custom: {
 *        '2020-4-9': true,  // 09 May 2020 is holiday.
 *        '2020-11-15': true // 15 Dec 2020 is holiday.
 *      }
 *    };
 *  {code}
 *
 * @private
 */
anychart.ganttModule.calendar.Calendar.prototype.buildHolidaysData_ = function() {
  if (this.holidays_) {
    for (var i = 0; i < this.holidays_.length; i++) {
      var holiday = this.holidays_[i];
      var year = holiday['year'];

      // These values must be defined because this.holidays_ must be normalized.
      var month = String(holiday['month']);
      var day = String(holiday['day']);

      if (goog.isDef(year)) {
        year = String(year);
        this.holidaysData_.custom[year + '-' + month + '-' + day] = true;
      } else {
        this.holidaysData_.yearly[month + '-' + day] = true;
      }
    }
  }
};


//endregion
//region -- Public API.
/**
 * TODO (A.Kudryavtsev): JSDoc.
 *
 * @param {Array.<?anychart.ganttModule.calendar.Calendar.DailyWorkingSchedule>=} opt_value - User defined working schedule.
 * @return {?Array.<?anychart.ganttModule.calendar.Calendar.DailyWorkingSchedule>|anychart.ganttModule.calendar.Calendar}
 */
anychart.ganttModule.calendar.Calendar.prototype.schedule = function(opt_value) {
  if (goog.isDef(opt_value)) {
    this.schedule_ = this.normalizeWorkingSchedule_(opt_value);
    this.dropCache_();
    this.defineWeekendRange_();
    this.dispatchSignal(anychart.Signal.NEEDS_REAPPLICATION);
    return this;
  }
  return this.schedule_;
};


/**
 * TODO (A.Kudryavtsev): JSDoc.
 *
 * @param {Array.<anychart.ganttModule.calendar.Calendar.Holiday>=} opt_value - User defined holidays.
 * @return {?Array.<anychart.ganttModule.calendar.Calendar.Holiday>|anychart.ganttModule.calendar.Calendar}
 */
anychart.ganttModule.calendar.Calendar.prototype.holidays = function(opt_value) {
  if (goog.isDef(opt_value)) {
    this.holidays_ = this.normalizeHolidays_(opt_value);
    this.dropHolidaysData_();
    this.buildHolidaysData_();
    this.dispatchSignal(anychart.Signal.NEEDS_REAPPLICATION);
    return this;
  }
  return this.holidays_;
};

/**
 *
 * @param {number} start - Day start UTC-timestamp.
 * @param {number} end - Day end UTC-timestamp.
 * @return {anychart.ganttModule.calendar.Calendar.DailyScheduleData} - Daily full info.
 * @private
 */
anychart.ganttModule.calendar.Calendar.prototype.getDailyInfo_ = function(start, end) {
  var d = new Date(start);

  var year = d.getUTCFullYear();
  var month = d.getUTCMonth();
  var date = d.getUTCDate();
  var weekDay = d.getUTCDay();

  var dateUTC = new goog.date.UtcDateTime(year, month, date);

  // checking cache
  var cacheKey = goog.date.Date.prototype.toUTCIsoString.call(dateUTC);
  var res = this.cache_[cacheKey];
  if (goog.isDef(res))
    return res;


};

/**
 * Returns intervals of working days between two passed dates.
 *
 * @param {number|Date} startDate - Start date for getting schedule info.
 *  UTC-timestamp is preferred to avoid timezone shift.
 * @param {number|Date} endDate - End date for getting schedule info.
 *  UTC-timestamp is preferred to avoid timezone shift as well.
 * @return {Array.<anychart.ganttModule.calendar.Calendar.DailyScheduleData>}
 *
 */
anychart.ganttModule.calendar.Calendar.prototype.getWorkingSchedule = function(startDate, endDate) {
  var start = anychart.utils.normalizeTimestamp(startDate);
  var end = anychart.utils.normalizeTimestamp(endDate);
  var rv = [];

  if (isNaN(start) || isNaN(end))
    return rv;

  start = anychart.utils.alignDateLeftByUnit(start, anychart.enums.Interval.DAY, 1, start); //TODO (A.Kudryavtsev): Do we need it?
  var date = new Date(start);
  var interval = new goog.date.Interval(0, 0, 1);
  var current = new goog.date.UtcDateTime(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  var dayStartTimestamp = current.getTime();


  while (dayStartTimestamp < end) {
    current.add(interval);
    var dayEndTimestamp = current.getTime();
  }

};


//endregion
//region -- Exports.


//endregion