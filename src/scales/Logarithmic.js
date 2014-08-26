goog.provide('anychart.scales.Logarithmic');

goog.require('anychart.enums');
goog.require('anychart.math');
goog.require('anychart.scales.Linear');



/**
 * @constructor
 * @extends {anychart.scales.Linear}
 */
anychart.scales.Logarithmic = function() {
  goog.base(this);
};
goog.inherits(anychart.scales.Logarithmic, anychart.scales.Linear);


/**
 * Log base value. Affects tick values auto calculation.
 * @param {number=} opt_value Log base to set.
 * @return {anychart.scales.Logarithmic|number}
 */
anychart.scales.Logarithmic.prototype.logBase = function(opt_value) {
  if (goog.isDef(opt_value)) {
    opt_value = isNaN(+opt_value) ? this.logBaseVal : +opt_value;
    if (opt_value != this.logBaseVal) {
      this.logBaseVal = opt_value;
      this.dispatchSignal(anychart.Signal.NEEDS_REAPPLICATION);
    }
    return this;
  }
  return this.logBaseVal;
};


/** @inheritDoc */
anychart.scales.Logarithmic.prototype.transform = function(value, opt_subRangeRatio) {
  this.calculate();
  value = anychart.utils.toNumber(value);
  var result = (anychart.math.log(/** @type {number} */(value), this.logBaseVal) - this.transformedMin_) / this.range;
  return this.isInverted ? 1 - result : result;
};


/** @inheritDoc */
anychart.scales.Logarithmic.prototype.inverseTransform = function(ratio) {
  this.calculate();
  if (this.isInverted) ratio = 1 - ratio;
  var x = (ratio * this.range + anychart.math.log(this.min));
  return anychart.math.round(Math.exp(x), 7);
};


/** @inheritDoc */
anychart.scales.Logarithmic.prototype.calculate = function() {
  if (this.consistent) return;
  goog.base(this, 'calculate');
  this.transformedMin_ = anychart.math.log(this.min, this.logBaseVal);
  this.transformedMax_ = anychart.math.log(this.max, this.logBaseVal);
  this.range = this.transformedMax_ - this.transformedMin_;
};


/** @inheritDoc */
anychart.scales.Logarithmic.prototype.determineScaleMinMax = function() {
  var logMax = anychart.math.log(this.dataRangeMax, this.logBaseVal);
  var logMin = anychart.math.log(this.dataRangeMin, this.logBaseVal);
  var range = logMax - logMin;
  if (!range) {
    this.dataRangeMin -= Math.E / 2;
    this.dataRangeMax += Math.E / 2;
    range = 1;
  }
  if (this.minimumModeAuto) {
    this.transformedMin_ = logMin - range * this.minimumRangeBasedGap;
    this.min = anychart.math.pow(this.logBaseVal, this.transformedMin_);
  }

  if (this.maximumModeAuto) {
    this.transformedMax_ = logMax + range * this.maximumRangeBasedGap;
    this.max = anychart.math.pow(this.logBaseVal, this.transformedMax_);
  }
};


/** @inheritDoc */
anychart.scales.Logarithmic.prototype.createTicks = function() {
  var ticks = goog.base(this, 'createTicks');
  ticks.suspendSignalsDispatching();
  ticks.mode(anychart.enums.ScatterTicksMode.LOGARITHMIC);
  ticks.resumeSignalsDispatching(false);
  return ticks;
};


//----------------------------------------------------------------------------------------------------------------------
//  Serialize & Deserialize
//----------------------------------------------------------------------------------------------------------------------
/** @inheritDoc */
anychart.scales.Logarithmic.prototype.serialize = function() {
  var data = goog.base(this, 'serialize');
  data['logBase'] = this.logBase();
  return data;
};


/** @inheritDoc */
anychart.scales.Logarithmic.prototype.deserialize = function(value) {
  this.suspendSignalsDispatching();
  goog.base(this, 'deserialize', value);
  this.logBase(value['logBase']);
  this.resumeSignalsDispatching(true);
  return this;
};


//----------------------------------------------------------------------------------------------------------------------
//  Shortcut functions
//----------------------------------------------------------------------------------------------------------------------
/**
 * Shortcut to create a logarithmic scale.
 * @return {anychart.scales.Logarithmic} Logarithmic scale.
 */
anychart.scales.log = function() {
  return new anychart.scales.Logarithmic();
};


//exports
goog.exportSymbol('anychart.scales.log', anychart.scales.log);
anychart.scales.Logarithmic.prototype['transform'] = anychart.scales.Logarithmic.prototype.transform;
anychart.scales.Logarithmic.prototype['inverseTransform'] = anychart.scales.Logarithmic.prototype.inverseTransform;
anychart.scales.Logarithmic.prototype['logBase'] = anychart.scales.Logarithmic.prototype.logBase;
