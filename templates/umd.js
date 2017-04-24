;(function() {
　　var _global = this;

　　//inject:jchart
    //endinject

　　if (typeof define === 'function' && define.amd) {
　　　　// Publish as AMD module
　　　　define(function() {return JChart;});
　　}

　　else if (typeof(module) != 'undefined' && module.exports) {

　　　　// Publish as commonjs module
　　　　module.exports = JChart;
　　}

　　else {
　　　　// Publish as global (in browsers)
　　　　var _previousRoot = _global.JChart;

　　　　// **`noConflict()` - (browser only) to reset global 'JChart' var**
　　　　JChart.noConflict = function() {
　　　　　　_global.JChart = _previousRoot;
　　　　　　return JChart;
　　　　};

　　　　_global.JChart = JChart;
　　}
}).call(this);