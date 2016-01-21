goog.provide('anychart.core.cartesian.series.RangeBar');

goog.require('anychart.core.cartesian.series.BarBase');



/**
 * Define RangeBar series type.<br/>
 * <b>Note:</b> Use method {@link anychart.charts.Cartesian#rangeBar} to get this series.
 * @param {(anychart.data.View|anychart.data.Set|Array|string)=} opt_data Data for the series.
 * @param {Object.<string, (string|boolean)>=} opt_csvSettings If CSV string is passed, you can pass CSV parser settings
 *    here as a hash map.
 * @constructor
 * @extends {anychart.core.cartesian.series.BarBase}
 */
anychart.core.cartesian.series.RangeBar = function(opt_data, opt_csvSettings) {
  goog.base(this, opt_data, opt_csvSettings);

  // Define reference points for a series
  this.yValueNames = ['low', 'high'];
  this.seriesSupportsStack = false;
  this.seriesSupportsError = false;
};
goog.inherits(anychart.core.cartesian.series.RangeBar, anychart.core.cartesian.series.BarBase);
anychart.core.cartesian.series.Base.SeriesTypesMap[anychart.enums.CartesianSeriesType.RANGE_BAR] = anychart.core.cartesian.series.RangeBar;


/** @inheritDoc */
anychart.core.cartesian.series.RangeBar.prototype.drawSubsequentPoint = function(pointState) {
  if (this.hasInvalidationState(anychart.ConsistencyState.APPEARANCE)) {
    var x = /** @type {number} */(this.iterator.meta('x'));
    var high = /** @type {number} */(this.iterator.meta('high'));
    var low = /** @type {number} */(this.iterator.meta('low'));

    /** @type {!acgraph.vector.Rect} */
    var rect = /** @type {!acgraph.vector.Rect} */(this.rootElement.genNextChild());
    var barWidth = this.getPointWidth();

    this.iterator.meta('shape', rect);

    rect.setY(x - barWidth / 2).setX(Math.min(low, high)).setHeight(barWidth).setWidth(Math.abs(low - high));

    this.colorizeShape(pointState);

    this.makeInteractive(rect);
  }


  if (this.hasInvalidationState(anychart.ConsistencyState.SERIES_HATCH_FILL)) {
    var hatchFillShape = this.hatchFillRootElement ?
        /** @type {!acgraph.vector.Rect} */(this.hatchFillRootElement.genNextChild()) :
        null;
    this.iterator.meta('hatchFillShape', hatchFillShape);
    var shape = /** @type {acgraph.vector.Shape} */(this.iterator.meta('shape'));
    if (goog.isDef(shape) && hatchFillShape) {
      hatchFillShape.deserialize(shape.serialize());
    }
    this.applyHatchFill(pointState);
  }
};


/** @inheritDoc */
anychart.core.cartesian.series.RangeBar.prototype.createPositionProvider = function(position) {
  var iterator = this.getIterator();
  var shape = iterator.meta('shape');
  if (shape) {
    var shapeBounds = shape.getBounds();
    position = anychart.enums.normalizeAnchor(position);
    return {'value': anychart.utils.getCoordinateByAnchor(shapeBounds, position)};
  } else {
    return {'value': {'x': iterator.meta('x'), 'y': iterator.meta('high')}};
  }
};


/**
 * @inheritDoc
 */
anychart.core.cartesian.series.RangeBar.prototype.getType = function() {
  return anychart.enums.CartesianSeriesType.RANGE_BAR;
};


//exports
anychart.core.cartesian.series.RangeBar.prototype['fill'] = anychart.core.cartesian.series.RangeBar.prototype.fill;//inherited
anychart.core.cartesian.series.RangeBar.prototype['hoverFill'] = anychart.core.cartesian.series.RangeBar.prototype.hoverFill;//inherited
anychart.core.cartesian.series.RangeBar.prototype['selectFill'] = anychart.core.cartesian.series.RangeBar.prototype.selectFill;//inherited

anychart.core.cartesian.series.RangeBar.prototype['stroke'] = anychart.core.cartesian.series.RangeBar.prototype.stroke;//inherited
anychart.core.cartesian.series.RangeBar.prototype['hoverStroke'] = anychart.core.cartesian.series.RangeBar.prototype.hoverStroke;//inherited
anychart.core.cartesian.series.RangeBar.prototype['selectStroke'] = anychart.core.cartesian.series.RangeBar.prototype.selectStroke;//inherited

anychart.core.cartesian.series.RangeBar.prototype['hatchFill'] = anychart.core.cartesian.series.RangeBar.prototype.hatchFill;//inherited
anychart.core.cartesian.series.RangeBar.prototype['hoverHatchFill'] = anychart.core.cartesian.series.RangeBar.prototype.hoverHatchFill;//inherited
anychart.core.cartesian.series.RangeBar.prototype['selectHatchFill'] = anychart.core.cartesian.series.RangeBar.prototype.selectHatchFill;//inherited
