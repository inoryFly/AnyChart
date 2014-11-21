goog.provide('anychart.elements.PolarAxis');
goog.require('acgraph');
goog.require('anychart.VisualBase');
goog.require('anychart.color');
goog.require('anychart.elements.LabelsFactory');
goog.require('anychart.elements.RadialTicks');
goog.require('anychart.enums');
goog.require('anychart.math.Rect');
goog.require('anychart.scales.Base');
goog.require('anychart.utils');



/**
 * Radar axis Class.
 * @constructor
 * @extends {anychart.VisualBase}
 */
anychart.elements.PolarAxis = function() {
  this.suspendSignalsDispatching();
  goog.base(this);

  this.labelsBounds_ = [];
  this.line_ = acgraph.circle();

  this.labels()
      .suspendSignalsDispatching()
      .enabled(true)
      .offsetX(0)
      .offsetY(0)
      .anchor(anychart.enums.Anchor.CENTER)
      .padding(1, 2, 1, 2)
      .fontFamily('Tahoma')
      .fontSize('11')
      .fontColor('rgb(34,34,34)')
      .resumeSignalsDispatching(false);

  this.labels().background()
      .suspendSignalsDispatching()
      .enabled(false)
      .stroke({
        'keys': [
          '0 #DDDDDD 1',
          '1 #D0D0D0 1'
        ],
        'angle': '90'
      })
      .fill({
        'keys': [
          '0 #FFFFFF 1',
          '0.5 #F3F3F3 1',
          '1 #FFFFFF 1'
        ],
        'angle': '90'
      })
      .resumeSignalsDispatching(false);

  this.ticks()
      .suspendSignalsDispatching()
      .enabled(true)
      .length(5)
      .stroke({'color': '#313131', 'lineJoin': 'round', 'lineCap': 'butt'})
      .resumeSignalsDispatching(false);

  this.stroke({'color': 'black', 'opacity': .1, 'lineJoin': 'round', 'lineCap': 'square'});
  this.startAngle(0);

  this.resumeSignalsDispatching(true);

  /**
   * Constant to save space.
   * @type {number}
   * @private
   */
  this.ALL_VISUAL_STATES_ = anychart.ConsistencyState.APPEARANCE |
      anychart.ConsistencyState.LABELS |
      anychart.ConsistencyState.TICKS |
      anychart.ConsistencyState.BOUNDS;
};
goog.inherits(anychart.elements.PolarAxis, anychart.VisualBase);


/**
 * Supported consistency states.
 * @type {number}
 */
anychart.elements.PolarAxis.prototype.SUPPORTED_CONSISTENCY_STATES =
    anychart.VisualBase.prototype.SUPPORTED_CONSISTENCY_STATES |
    anychart.ConsistencyState.APPEARANCE |
    anychart.ConsistencyState.LABELS |
    anychart.ConsistencyState.TICKS |
    anychart.ConsistencyState.BOUNDS;


/**
 * Supported consistency states.
 * @type {number}
 */
anychart.elements.PolarAxis.prototype.SUPPORTED_SIGNALS = anychart.VisualBase.prototype.SUPPORTED_SIGNALS;


/**
 * @type {acgraph.vector.Circle}
 * @private
 */
anychart.elements.PolarAxis.prototype.line_ = null;


/**
 * @type {string}
 * @private
 */
anychart.elements.PolarAxis.prototype.name_ = 'axis';


/**
 * @type {anychart.elements.LabelsFactory}
 * @private
 */
anychart.elements.PolarAxis.prototype.labels_ = null;


/**
 * @type {anychart.elements.RadialTicks}
 * @private
 */
anychart.elements.PolarAxis.prototype.ticks_ = null;


/**
 * @type {string|acgraph.vector.Stroke}
 * @private
 */
anychart.elements.PolarAxis.prototype.stroke_ = 'none';


/**
 * @type {anychart.scales.ScatterBase}
 * @private
 */
anychart.elements.PolarAxis.prototype.scale_ = null;


/**
 * @type {anychart.utils.Bounds}
 * @private
 */
anychart.elements.PolarAxis.prototype.pixelBounds_ = null;


/**
 * @type {number}
 * @private
 */
anychart.elements.PolarAxis.prototype.radius_ = NaN;


/**
 *
 * @type {number}
 * @private
 */
anychart.elements.PolarAxis.prototype.criticalTickLength_ = NaN;


/**
 * @type {number}
 * @private
 */
anychart.elements.PolarAxis.prototype.cx_ = NaN;


/**
 * @type {number}
 * @private
 */
anychart.elements.PolarAxis.prototype.cy_ = NaN;


/**
 * @type {number}
 * @private
 */
anychart.elements.PolarAxis.prototype.startAngle_ = NaN;


/**
 * @type {Array.<anychart.math.Rect>}
 * @private
 */
anychart.elements.PolarAxis.prototype.labelsBounds_ = null;


/**
 * @param {string=} opt_value Name.
 * @return {string|anychart.elements.PolarAxis} Axis name or itself for method chaining.
 */
anychart.elements.PolarAxis.prototype.name = function(opt_value) {
  if (goog.isDef(opt_value)) {
    if (this.name_ != opt_value)
      this.name_ = opt_value;
    return this;
  } else {
    return this.name_;
  }
};


/**
 * @param {anychart.elements.LabelsFactory=} opt_value Axis labels.
 * @return {anychart.elements.LabelsFactory|anychart.elements.PolarAxis} Axis labels of itself for method chaining.
 */
anychart.elements.PolarAxis.prototype.labels = function(opt_value) {
  if (!this.labels_) {
    this.labels_ = new anychart.elements.LabelsFactory();
    this.labels_.listenSignals(this.labelsInvalidated_, this);
    this.registerDisposable(this.labels_);
  }

  if (goog.isDef(opt_value)) {
    if (opt_value instanceof anychart.elements.LabelsFactory) {
      this.labels_.deserialize(opt_value.serialize());
    } else if (goog.isObject(opt_value)) {
      this.labels_.deserialize(opt_value);
    } else if (anychart.utils.isNone(opt_value)) {
      this.labels_.enabled(false);
    }

    this.dropBoundsCache_();
    return this;
  }
  return this.labels_;
};


/**
 * Internal label invalidation handler.
 * @param {anychart.SignalEvent} event Event object.
 * @private
 */
anychart.elements.PolarAxis.prototype.labelsInvalidated_ = function(event) {
  var state = 0;
  var signal = 0;
  if (event.hasSignal(anychart.Signal.BOUNDS_CHANGED)) {
    state = this.ALL_VISUAL_STATES_;
    signal = anychart.Signal.BOUNDS_CHANGED | anychart.Signal.NEEDS_REDRAW;
  } else if (event.hasSignal(anychart.Signal.NEEDS_REDRAW)) {
    state = anychart.ConsistencyState.LABELS;
    signal = anychart.Signal.NEEDS_REDRAW;
  }

  this.dropBoundsCache_();
  this.invalidate(state, signal);
};


/**
 * @param {anychart.elements.RadialTicks=} opt_value Axis ticks.
 * @return {anychart.elements.RadialTicks|anychart.elements.PolarAxis} Axis ticks or itself for method chaining.
 */
anychart.elements.PolarAxis.prototype.ticks = function(opt_value) {
  if (!this.ticks_) {
    this.ticks_ = new anychart.elements.RadialTicks();
    this.ticks_.listenSignals(this.ticksInvalidated_, this);
    this.registerDisposable(this.ticks_);
  }

  if (goog.isDef(opt_value)) {
    this.ticks_.suspendSignalsDispatching();
    if (opt_value instanceof anychart.elements.RadialTicks) {
      this.ticks_.deserialize(opt_value.serialize());
    } else if (goog.isObject(opt_value)) {
      this.ticks_.deserialize(opt_value);
    } else if (anychart.utils.isNone(opt_value)) {
      this.ticks_.enabled(false);
    }
    this.ticks_.resumeSignalsDispatching(true);
    this.invalidate(anychart.ConsistencyState.APPEARANCE |
        anychart.ConsistencyState.BOUNDS, anychart.Signal.NEEDS_REDRAW);
    return this;
  }
  return this.ticks_;
};


/**
 * Internal ticks invalidation handler.
 * @param {anychart.SignalEvent} event Event object.
 * @private
 */
anychart.elements.PolarAxis.prototype.ticksInvalidated_ = function(event) {
  var state = 0;
  var signal = 0;
  if (event.hasSignal(anychart.Signal.BOUNDS_CHANGED)) {
    state = this.ALL_VISUAL_STATES_;
    signal = anychart.Signal.BOUNDS_CHANGED | anychart.Signal.NEEDS_REDRAW;
  } else if (event.hasSignal(anychart.Signal.NEEDS_REDRAW)) {
    state = anychart.ConsistencyState.TICKS;
    signal = anychart.Signal.NEEDS_REDRAW;
  }
  this.invalidate(state, signal);
};


/**
 * @param {(string|acgraph.vector.Stroke)=} opt_value Stroke.
 * @return {string|acgraph.vector.Stroke|anychart.elements.PolarAxis} Axis line stroke or itself for method chaining.
 */
anychart.elements.PolarAxis.prototype.stroke = function(opt_value) {
  if (goog.isDef(opt_value)) {
    opt_value = acgraph.vector.normalizeStroke(opt_value);
    if (this.stroke_ != opt_value) {
      var thicknessOld = goog.isObject(this.stroke_) ? this.stroke_['thickness'] || 1 : 1;
      var thicknessNew = goog.isObject(opt_value) ? opt_value['thickness'] || 1 : 1;
      this.stroke_ = opt_value;
      if (thicknessNew == thicknessOld)
        this.invalidate(anychart.ConsistencyState.APPEARANCE, anychart.Signal.NEEDS_REDRAW);
      else
        this.invalidate(this.ALL_VISUAL_STATES_, anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  } else {
    return this.stroke_;
  }
};


/**
 * @param {anychart.scales.ScatterBase=} opt_value Scale.
 * @return {anychart.scales.ScatterBase|anychart.elements.PolarAxis} Axis scale or itself for method chaining.
 */
anychart.elements.PolarAxis.prototype.scale = function(opt_value) {
  if (goog.isDef(opt_value)) {
    if (this.scale_ != opt_value) {
      this.scale_ = opt_value;
      this.scale_.listenSignals(this.scaleInvalidated_, this);
      this.invalidate(this.ALL_VISUAL_STATES_, anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  } else {
    return this.scale_;
  }
};


/**
 * Internal ticks invalidation handler.
 * @param {anychart.SignalEvent} event Event object.
 * @private
 */
anychart.elements.PolarAxis.prototype.scaleInvalidated_ = function(event) {
  if (event.hasSignal(anychart.Signal.NEEDS_REAPPLICATION)) {
    this.invalidate(this.ALL_VISUAL_STATES_, anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
  }
};


/**
 * @param {(string|number)=} opt_value .
 * @return {(string|number|anychart.elements.PolarAxis)} .
 */
anychart.elements.PolarAxis.prototype.startAngle = function(opt_value) {
  if (goog.isDef(opt_value)) {
    opt_value = goog.math.standardAngle((goog.isNull(opt_value) || isNaN(+opt_value)) ? 0 : +opt_value);
    if (this.startAngle_ != opt_value) {
      this.startAngle_ = opt_value;
      this.invalidate(this.ALL_VISUAL_STATES_, anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  } else {
    return this.startAngle_;
  }
};


/** @inheritDoc */
anychart.elements.PolarAxis.prototype.invalidateParentBounds = function() {
  this.invalidate(this.ALL_VISUAL_STATES_, anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
};


/**
 * @private
 */
anychart.elements.PolarAxis.prototype.dropBoundsCache_ = function() {
  if (this.labelsBoundingRects_) this.labelsBoundingRects_.length = 0;
  this.labelsBounds_.length = 0;
  this.overlappedLabels_ = null;
};


/**
 * Calculate axis bounds, center, radius.
 * @return {anychart.utils.Bounds}
 * @private
 */
anychart.elements.PolarAxis.prototype.calculateAxisBounds_ = function() {
  if (!this.pixelBounds_ || this.hasInvalidationState(anychart.ConsistencyState.BOUNDS)) {
    var parentBounds = this.parentBounds();

    if (parentBounds) {
      this.radius_ = Math.round(Math.min(parentBounds.width, parentBounds.height) / 2);
      this.cx_ = Math.round(parentBounds.left + parentBounds.width / 2);
      this.cy_ = Math.round(parentBounds.top + parentBounds.height / 2);

      var scale = /** @type {anychart.scales.ScatterBase} */(this.scale());

      if (scale) {
        var delta;
        var i;
        var scaleTicksArr = scale.ticks().get();

        var ticksArrLen = scaleTicksArr.length - 1;

        this.sweep_ = 360 / ticksArrLen;

        var angle = goog.math.standardAngle(this.startAngle() - 90);

        var leftExtreme = NaN;
        var topExtreme = NaN;
        var rightExtreme = NaN;
        var bottomExtreme = NaN;

        var leftExtremeLabelIndex = NaN;
        var topExtremeLabelIndex = NaN;
        var rightExtremeLabelIndex = NaN;
        var bottomExtremeLabelIndex = NaN;

        var leftExtremeAngle = NaN;
        var topExtremeAngle = NaN;
        var rightExtremeAngle = NaN;
        var bottomExtremeAngle = NaN;

        this.dropBoundsCache_();
        this.criticalTickLength_ = NaN;

        for (i = 0; i < ticksArrLen; i++) {
          var x, y, x1, y1, lineThickness, angleRad, radius, tickLen;
          if (this.labels().enabled()) {
            var labelBounds = this.getLabelBounds_(i);
            x = labelBounds.getLeft();
            y = labelBounds.getTop();
            x1 = labelBounds.getRight();
            y1 = labelBounds.getBottom();
          } else if (this.ticks().enabled()) {
            lineThickness = this.line_.stroke()['thickness'] ? this.line_.stroke()['thickness'] : 1;
            angleRad = angle * Math.PI / 180;
            tickLen = this.ticks().enabled() ? this.ticks().length() : 0;
            radius = this.radius_ + tickLen + lineThickness / 2;
            x = x1 = Math.round(this.cx_ + radius * Math.cos(angleRad));
            y = y1 = Math.round(this.cy_ + radius * Math.sin(angleRad));
          } else {
            lineThickness = this.line_.stroke()['thickness'] ? this.line_.stroke()['thickness'] : 1;
            angleRad = angle * Math.PI / 180;
            radius = this.radius_ + lineThickness / 2;
            x = x1 = Math.round(this.cx_ + radius * Math.cos(angleRad));
            y = y1 = Math.round(this.cy_ + radius * Math.sin(angleRad));
          }

          if (isNaN(leftExtreme) || x < leftExtreme) {
            leftExtreme = x;
            leftExtremeLabelIndex = i;
            leftExtremeAngle = angle;
          }
          if (isNaN(topExtreme) || y < topExtreme) {
            topExtreme = y;
            topExtremeLabelIndex = i;
            topExtremeAngle = angle;
          }
          if (isNaN(rightExtreme) || x1 > rightExtreme) {
            rightExtreme = x1;
            rightExtremeLabelIndex = i;
            rightExtremeAngle = angle;
          }
          if (isNaN(bottomExtreme) || y1 > bottomExtreme) {
            bottomExtreme = y1;
            bottomExtremeLabelIndex = i;
            bottomExtremeAngle = angle;
          }
          angle = goog.math.standardAngle(angle + this.sweep_);
        }

        var leftDelta = 0;
        var topDelta = 0;
        var rightDelta = 0;
        var bottomDelta = 0;

        leftExtreme = Math.round(leftExtreme);
        topExtreme = Math.round(topExtreme);
        rightExtreme = Math.round(rightExtreme);
        bottomExtreme = Math.round(bottomExtreme);

        var a;
        if (leftExtreme < parentBounds.getLeft()) {
          a = leftExtremeAngle < 180 ?
              Math.sin((leftExtremeAngle - 90) * Math.PI / 180) :
              Math.cos((leftExtremeAngle - 180) * Math.PI / 180);
          leftDelta = Math.round((parentBounds.getLeft() - leftExtreme) / a);
        }
        if (topExtreme < parentBounds.getTop()) {
          a = topExtremeAngle < 270 ?
              Math.sin((topExtremeAngle - 180) * Math.PI / 180) :
              Math.cos((topExtremeAngle - 270) * Math.PI / 180);
          topDelta = Math.round((parentBounds.getTop() - topExtreme) / a);
        }
        if (rightExtreme > parentBounds.getRight()) {
          a = rightExtremeAngle < 360 ?
              Math.sin((rightExtremeAngle - 270) * Math.PI / 180) :
              Math.cos(rightExtremeAngle * Math.PI / 180);
          rightDelta = Math.round((rightExtreme - parentBounds.getRight()) / a);
        }
        if (bottomExtreme > parentBounds.getBottom()) {
          a = bottomExtremeAngle < 90 ?
              Math.sin(bottomExtremeAngle * Math.PI / 180) :
              Math.cos((bottomExtremeAngle - 90) * Math.PI / 180);
          bottomDelta = Math.round((bottomExtreme - parentBounds.getBottom()) / a);
        }

        delta = Math.max(leftDelta, topDelta, rightDelta, bottomDelta);

        if (delta > 0) {
          this.radius_ -= delta;
          if (this.radius_ < 0) {
            this.radius_ = 0;
            var labelSize = 0;
            if (this.labels().enabled()) {
              var extremeLabelIndex = NaN, isHorizontal;
              if (delta == leftDelta) {
                extremeLabelIndex = leftExtremeLabelIndex;
                isHorizontal = true;
              } else if (delta == topDelta) {
                extremeLabelIndex = topExtremeLabelIndex;
                isHorizontal = false;
              } else if (delta == rightDelta) {
                extremeLabelIndex = rightExtremeLabelIndex;
                isHorizontal = true;
              } else if (delta == bottomDelta) {
                extremeLabelIndex = bottomExtremeLabelIndex;
                isHorizontal = false;
              }
              var extremeLabelBounds = this.getLabelBounds_(extremeLabelIndex);
              labelSize = isHorizontal ? extremeLabelBounds.width : extremeLabelBounds.height;
            }
            lineThickness = this.line_.stroke()['thickness'] ? this.line_.stroke()['thickness'] : 1;
            this.criticalTickLength_ = Math.min(parentBounds.width, parentBounds.height) / 2 - labelSize - lineThickness;
          }
          this.dropBoundsCache_();
        }

        var outerRadius = this.radius_ + delta;
        var outerDiameter = outerRadius * 2;
        this.pixelBounds_ = new anychart.utils.Bounds(
            this.cx_ - outerRadius,
            this.cy_ - outerRadius,
            outerDiameter,
            outerDiameter);
      } else {
        this.pixelBounds_ = new anychart.utils.Bounds(
            this.cx_ - this.radius_,
            this.cy_ - this.radius_,
            this.radius_ * 2,
            this.radius_ * 2);
      }
    } else {
      this.radius_ = 0;
      this.cx_ = 0;
      this.cy_ = 0;
      this.pixelBounds_ = new anychart.utils.Bounds(0, 0, 0, 0);
    }
    this.markConsistent(anychart.ConsistencyState.BOUNDS);
  }
  return this.pixelBounds_;
};


/**
 * Returns remaining parent bounds to use elsewhere.
 * @return {anychart.math.Rect} Parent bounds without the space used by the title.
 */
anychart.elements.PolarAxis.prototype.getRemainingBounds = function() {
  var parentBounds = this.parentBounds();

  if (parentBounds) {
    this.calculateAxisBounds_();
    var lineThickness = this.line_.stroke()['thickness'] ? this.line_.stroke()['thickness'] : 1;
    var halfThickness = Math.floor(lineThickness / 2);
    return new anychart.math.Rect(
        this.cx_ - this.radius_ + halfThickness,
        this.cy_ - this.radius_ + halfThickness,
        (this.radius_ - halfThickness) * 2,
        (this.radius_ - halfThickness) * 2);
  } else
    return new anychart.math.Rect(0, 0, 0, 0);
};


/**
 * Returns labels anchor for angle.
 * @param {number} angle .
 * @param {anychart.math.Rect} bounds .
 * @return {{x: number, y: number}} .
 * @private
 */
anychart.elements.PolarAxis.prototype.getLabelPositionOffsetForAngle_ = function(angle, bounds) {
  var width = bounds.width, height = bounds.height;

  var offset = {x: 0, y: 0};
  if (angle == 0) {
    offset.x += width / 2;
  } else if (angle > 0 && angle < 90) {
    offset.x += width / 2;
    offset.y += height / 2;
  } else if (angle == 90) {
    offset.y += height / 2;
  } else if (angle > 90 && angle < 180) {
    offset.y += height / 2;
    offset.x -= width / 2;
  } else if (angle == 180) {
    offset.x -= width / 2;
  } else if (angle > 180 && angle < 270) {
    offset.y -= height / 2;
    offset.x -= width / 2;
  } else if (angle == 270) {
    offset.y -= height / 2;
  } else if (angle > 270) {
    offset.y -= height / 2;
    offset.x += width / 2;
  }

  return offset;
};


/**
 * Calculate label bounds.
 * @param {number} index Label index.
 * @return {anychart.math.Rect} Label bounds.
 * @private
 */
anychart.elements.PolarAxis.prototype.getLabelBounds_ = function(index) {
  var boundsCache = this.labelsBounds_;
  if (goog.isDef(boundsCache[index]))
    return boundsCache[index];

  var lineThickness = this.line_.stroke()['thickness'] ? this.line_.stroke()['thickness'] : 1;
  var ticks = this.ticks();
  var labels = this.labels();
  var scale = /** @type {anychart.scales.ScatterBase} */(this.scale());
  var scaleTicks = scale.ticks();

  var value = scaleTicks.get()[index];

  var angle = goog.math.standardAngle(this.startAngle() - 90 + index * this.sweep_);
  var angleRad = angle * Math.PI / 180;
  var tickLen = ticks.enabled() ? isNaN(this.criticalTickLength_) ? this.ticks().length() : this.criticalTickLength_ : 0;
  var radius = this.radius_ + tickLen + lineThickness / 2;
  var x = Math.round(this.cx_ + radius * Math.cos(angleRad));
  var y = Math.round(this.cy_ + radius * Math.sin(angleRad));

  var formatProvider = this.getLabelsFormatProvider_(index, value);
  var positionProvider = {'value': {'x': x, 'y': y}};
  var bounds = labels.measure(formatProvider, positionProvider);
  var offset = this.getLabelPositionOffsetForAngle_(angle, bounds);
  bounds.left += offset.x;
  bounds.top += offset.y;

  return boundsCache[index] = bounds;
};


/**
 * Gets format provider for label.
 * @param {number} index Label index.
 * @param {string|number} value Label value.
 * @return {Object} Labels format provider.
 * @private
 */
anychart.elements.PolarAxis.prototype.getLabelsFormatProvider_ = function(index, value) {
  var axisName = this.name();
  var scale = this.scale();

  var labelText, labelValue;
  if (scale instanceof anychart.scales.Linear) {
    labelText = parseFloat(value);
    labelValue = parseFloat(value);
  } else if (scale instanceof anychart.scales.DateTime) {
    var date = new Date(value);
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    var yy = date.getFullYear();

    mm = mm < 10 ? '0' + mm : '' + mm;
    dd = dd < 10 ? '0' + dd : '' + dd;

    labelText = mm + '-' + dd + '-' + yy;
    labelValue = value;
  }

  return {
    'index': index,
    'value': labelText,
    'tickValue': labelValue,
    'axisName': axisName,
    'max': scale.max ? scale.max : null,
    'min': scale.min ? scale.min : null,
    'scale': scale
    //TODO as soon as it is possible:
    //sum -- the sum data values from series bound to this axis (depends on orientation)
    //average -- the sum divided by the number of points
    //median -- axis median
    //mode -- axis mode
  };
};


/**
 * Axis labels drawer.
 * @param {number} index Label index.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @private
 */
anychart.elements.PolarAxis.prototype.drawLabel_ = function(index, x, y) {
  var scale = /** @type {anychart.scales.ScatterBase} */(this.scale());
  var scaleTicksArr = scale.ticks().get();

  var formatProvider = this.getLabelsFormatProvider_(index, scaleTicksArr[index]);
  var positionProvider = {'value': {x: x, y: y}};
  this.labels().add(formatProvider, positionProvider);
};


/** @inheritDoc */
anychart.elements.PolarAxis.prototype.checkDrawingNeeded = function() {
  if (this.isConsistent())
    return false;

  if (!this.enabled()) {
    if (this.hasInvalidationState(anychart.ConsistencyState.ENABLED)) {
      this.remove();
      this.markConsistent(anychart.ConsistencyState.ENABLED);
      this.ticks().invalidate(anychart.ConsistencyState.CONTAINER);
      this.labels().invalidate(anychart.ConsistencyState.CONTAINER);
      this.invalidate(
          anychart.ConsistencyState.CONTAINER |
              anychart.ConsistencyState.TICKS |
              anychart.ConsistencyState.LABELS
      );
    }
    return false;
  }
  this.markConsistent(anychart.ConsistencyState.ENABLED);
  return true;
};


/**
 * Axis drawing.
 * @return {anychart.elements.PolarAxis} An instance of {@link anychart.elements.PolarAxis} class for method chaining.
 */
anychart.elements.PolarAxis.prototype.draw = function() {
  var scale = /** @type {anychart.scales.ScatterBase} */(this.scale());

  if (!scale) {
    anychart.utils.error(anychart.enums.ErrorCode.SCALE_NOT_SET);
    return this;
  }

  if (!this.checkDrawingNeeded())
    return this;

  var ticksDrawer, labelsDrawer;

  this.labels().suspendSignalsDispatching();
  this.ticks().suspendSignalsDispatching();

  if (this.hasInvalidationState(anychart.ConsistencyState.APPEARANCE)) {
    if (!this.line_) {
      this.line_ = acgraph.circle();
      this.registerDisposable(this.line_);
    }
    this.line_.stroke(this.stroke_);

    this.markConsistent(anychart.ConsistencyState.APPEARANCE);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.Z_INDEX)) {
    var zIndex = /** @type {number} */(this.zIndex());
    this.line_.zIndex(zIndex);
    this.ticks().zIndex(zIndex);
    this.labels().zIndex(zIndex);

    this.markConsistent(anychart.ConsistencyState.Z_INDEX);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.CONTAINER)) {
    var container = /** @type {acgraph.vector.ILayer} */(this.container());
    this.line_.parent(container);
    this.ticks().container(container);
    this.labels().container(container);

    this.markConsistent(anychart.ConsistencyState.CONTAINER);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.TICKS)) {
    var ticks = /** @type {anychart.elements.RadialTicks} */(this.ticks());
    ticks.draw();

    ticksDrawer = ticks.drawTick;
    this.markConsistent(anychart.ConsistencyState.TICKS);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.LABELS)) {
    var labels = this.labels();
    if (!labels.container()) labels.container(/** @type {acgraph.vector.ILayer} */(this.container()));
    labels.parentBounds(/** @type {anychart.math.Rect} */(this.parentBounds()));
    labels.clear();

    labelsDrawer = this.drawLabel_;
    this.markConsistent(anychart.ConsistencyState.LABELS);
  }

  if (goog.isDef(ticksDrawer) || goog.isDef(labelsDrawer)) {
    this.calculateAxisBounds_();
    var i;
    var scaleTicksArr = scale.ticks().get();
    var ticksArrLen = scaleTicksArr.length - 1;
    var angle = goog.math.standardAngle(this.startAngle() - 90);
    var tickLen = this.ticks().enabled() ? isNaN(this.criticalTickLength_) ? this.ticks().length() : this.criticalTickLength_ : 0;
    var lineThickness = this.line_.stroke()['thickness'] ? this.line_.stroke()['thickness'] : 1;

    this.line_.radius(this.radius_);
    this.line_.centerX(this.cx_);
    this.line_.centerY(this.cy_);

    for (i = 0; i < ticksArrLen; i++) {
      var angleRad = angle * Math.PI / 180;

      if (ticksDrawer || labelsDrawer) {
        var ticksThickness = this.ticks().stroke()['thickness'] ? parseFloat(this.ticks().stroke()['thickness']) : 1;
        var xPixelShift = 0;
        var yPixelShift = 0;

        var halfThickness = Math.floor(lineThickness / 2);
        if (angle == 0) {
          yPixelShift = ticksThickness % 2 == 0 ? 0 : -.5;
        } else if (angle == 90) {
          xPixelShift = ticksThickness % 2 == 0 ? 0 : -.5;
        } else if (angle == 180) {
          yPixelShift = ticksThickness % 2 == 0 ? 0 : .5;
        } else if (angle == 270) {
          xPixelShift = ticksThickness % 2 == 0 ? 0 : .5;
        }

        var x0Ticks, y0Ticks, x1Ticks, y1Ticks, radius;

        radius = this.radius_ + halfThickness;
        x0Ticks = this.cx_ + radius * Math.cos(angleRad);
        y0Ticks = this.cy_ + radius * Math.sin(angleRad);

        radius = this.radius_ + tickLen + halfThickness;
        x1Ticks = this.cx_ + radius * Math.cos(angleRad);
        y1Ticks = this.cy_ + radius * Math.sin(angleRad);

        if (angle % 90 == 0) {
          x0Ticks = Math.round(x0Ticks);
          y0Ticks = Math.round(y0Ticks);
          x1Ticks = Math.round(x1Ticks);
          y1Ticks = Math.round(y1Ticks);
        }

        x0Ticks += xPixelShift;
        y0Ticks += yPixelShift;
        x1Ticks += xPixelShift;
        y1Ticks += yPixelShift;

        if (ticksDrawer) ticksDrawer.call(ticks, x0Ticks, y0Ticks, x1Ticks, y1Ticks);
        if (labelsDrawer) {
          var offset = this.getLabelPositionOffsetForAngle_(angle, this.getLabelBounds_(i));
          labelsDrawer.call(this, i, x1Ticks + offset.x, y1Ticks + offset.y);
        }
      }

      angle = goog.math.standardAngle(angle + this.sweep_);
    }
    this.labels().draw();
  }

  this.labels().resumeSignalsDispatching(false);
  this.ticks().resumeSignalsDispatching(false);

  return this;
};


/** @inheritDoc */
anychart.elements.PolarAxis.prototype.remove = function() {
  if (this.line_) this.line_.parent(null);
  this.ticks().remove();
  if (this.labels_) this.labels_.remove();
};


/**
 * Axis serialization.
 * @return {Object} Serialized axis data.
 */
anychart.elements.PolarAxis.prototype.serialize = function() {
  var data = goog.base(this, 'serialize');

  data['labels'] = this.labels().serialize();
  data['ticks'] = this.ticks().serialize();

  data['stroke'] = anychart.color.serialize(/** @type {acgraph.vector.Stroke}*/(this.stroke()));
  data['name'] = this.name();

  return data;
};


/** @inheritDoc */
anychart.elements.PolarAxis.prototype.deserialize = function(value) {
  this.suspendSignalsDispatching();

  goog.base(this, 'deserialize', value);

  this.labels(value['labels']);
  this.ticks(value['ticks']);

  this.name(value['name']);
  this.stroke(value['stroke']);

  this.resumeSignalsDispatching(true);

  return this;
};


/** @inheritDoc */
anychart.elements.PolarAxis.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');

  delete this.scale_;
  this.labelsBounds_ = null;

  this.title_ = null;

  goog.dispose(this.line_);
  this.line_ = null;

  this.ticks_ = null;

  this.pixelBounds_ = null;

  this.labels_ = null;
};


/**
 * Returns axis instance.
 * @return {!anychart.elements.PolarAxis}
 */
anychart.elements.polarAxis = function() {
  return new anychart.elements.PolarAxis();
};


//exports
goog.exportSymbol('anychart.elements.polarAxis', anychart.elements.polarAxis);
anychart.elements.PolarAxis.prototype['name'] = anychart.elements.PolarAxis.prototype.name;
anychart.elements.PolarAxis.prototype['startAngle'] = anychart.elements.PolarAxis.prototype.startAngle;
anychart.elements.PolarAxis.prototype['labels'] = anychart.elements.PolarAxis.prototype.labels;
anychart.elements.PolarAxis.prototype['ticks'] = anychart.elements.PolarAxis.prototype.ticks;
anychart.elements.PolarAxis.prototype['stroke'] = anychart.elements.PolarAxis.prototype.stroke;
anychart.elements.PolarAxis.prototype['scale'] = anychart.elements.PolarAxis.prototype.scale;
anychart.elements.PolarAxis.prototype['getRemainingBounds'] = anychart.elements.PolarAxis.prototype.getRemainingBounds;
anychart.elements.PolarAxis.prototype['draw'] = anychart.elements.PolarAxis.prototype.draw;