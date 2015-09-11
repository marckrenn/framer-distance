require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"distance":[function(require,module,exports){
var dist, startX, startY, startcord;

startcord = false;

startX = 0;

startY = 0;

dist = 0.0;

exports.toDragStart = function(layer) {
  if (startcord === false) {
    startX = layer.x;
    startY = layer.y;
    startcord = true;
  }
  dist = Math.sqrt(Math.pow(startX - layer.x, 2) + Math.pow(startY - layer.y, 2));
  layer.on(Events.DragEnd, function() {
    return startcord = false;
  });
  return dist;
};

exports.twoPoints = function(p1x, p1y, p2x, p2y) {
  dist = Math.sqrt(Math.pow(p1x - p2x, 2) + Math.pow(p1y - p2y, 2));
  return dist;
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFyY2tyZW5uL0Ryb3Bib3gvZnJhbWVyX3Byb2plY3RzL2Rpc3RhbmNlRXhhbXBsZS5mcmFtZXIvbW9kdWxlcy9kaXN0YW5jZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNNQSxJQUFBOztBQUFBLFNBQUEsR0FBWTs7QUFDWixNQUFBLEdBQVM7O0FBQ1QsTUFBQSxHQUFTOztBQUNULElBQUEsR0FBTzs7QUFHUCxPQUFPLENBQUMsV0FBUixHQUFzQixTQUFDLEtBQUQ7RUFFbEIsSUFBRyxTQUFBLEtBQWEsS0FBaEI7SUFDSSxNQUFBLEdBQVMsS0FBSyxDQUFDO0lBQ2YsTUFBQSxHQUFTLEtBQUssQ0FBQztJQUNmLFNBQUEsR0FBWSxLQUhoQjs7RUFLQSxJQUFBLEdBQU8sSUFBSSxDQUFDLElBQUwsVUFBWSxNQUFBLEdBQVMsS0FBSyxDQUFDLEdBQU0sRUFBdEIsWUFBMkIsTUFBQSxHQUFTLEtBQUssQ0FBQyxHQUFNLEVBQTNEO0VBRVAsS0FBSyxDQUFDLEVBQU4sQ0FBUyxNQUFNLENBQUMsT0FBaEIsRUFBeUIsU0FBQTtXQUVyQixTQUFBLEdBQVk7RUFGUyxDQUF6QjtBQUlBLFNBQU87QUFiVzs7QUFpQnRCLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLFNBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCO0VBRWhCLElBQUEsR0FBTyxJQUFJLENBQUMsSUFBTCxVQUFZLEdBQUEsR0FBTSxLQUFRLEVBQWYsWUFBb0IsR0FBQSxHQUFNLEtBQVEsRUFBN0M7QUFFUCxTQUFPO0FBSlMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyAnZGlzdGFuY2UnIG1vZHVsZSB2MS4wXG4jIGJ5IE1hcmMgS3Jlbm4sIFNlcHQuIDIwMTUgfCBtYXJjLmtyZW5uQGdtYWlsLmNvbSB8IEBtYXJjX2tyZW5uXG4jXG4jIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBkaXN0YW5jZSA9IHJlcXVpcmUgXCJkaXN0YW5jZVwiXG5cbnN0YXJ0Y29yZCA9IGZhbHNlXG5zdGFydFggPSAwXG5zdGFydFkgPSAwXG5kaXN0ID0gMC4wXG5cbiMgUmV0dXJucyBkaXN0YW5jZSBiZXR3ZWVuIGN1cnJlbnQgYW5kIHN0YXJ0IHBvc2l0aW9uIG9mIGEgZHJhZ2dhYmxlIGxheWVyXG5leHBvcnRzLnRvRHJhZ1N0YXJ0ID0gKGxheWVyKSAtPlxuICAgICAgICBcbiAgICBpZiBzdGFydGNvcmQgaXMgZmFsc2VcbiAgICAgICAgc3RhcnRYID0gbGF5ZXIueFxuICAgICAgICBzdGFydFkgPSBsYXllci55XG4gICAgICAgIHN0YXJ0Y29yZCA9IHRydWVcblxuICAgIGRpc3QgPSBNYXRoLnNxcnQoIChzdGFydFggLSBsYXllci54KSAqKiAyICsgKHN0YXJ0WSAtIGxheWVyLnkpICoqIDIgKSAgIFxuICAgIFxuICAgIGxheWVyLm9uIEV2ZW50cy5EcmFnRW5kLCAtPlxuICAgICAgICBcbiAgICAgICAgc3RhcnRjb3JkID0gZmFsc2VcbiAgICAgICBcbiAgICByZXR1cm4gZGlzdFxuICAgICAgICBcbiAgICBcbiMgUmV0dXJucyBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHMgKHBvaW50MXgsIHBvaW50MXksIHBvaW50MngsIHBvaW50MnkpXG5leHBvcnRzLnR3b1BvaW50cyA9IChwMXgsIHAxeSwgcDJ4LCBwMnkpIC0+ICAgICAgIFxuICAgICAgICBcbiAgICBkaXN0ID0gTWF0aC5zcXJ0KCAocDF4IC0gcDJ4KSAqKiAyICsgKHAxeSAtIHAyeSkgKiogMiApXG4gICAgICAgICAgICAgIFxuICAgIHJldHVybiBkaXN0Il19
