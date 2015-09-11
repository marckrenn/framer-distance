## framer-distance
‚distance‘ is a module that calculates the distance between either two points or between the current and the start position of a draggable layer.


#### Demo

*Live Demo*: http://share.framerjs.com/9sdmja3bkodv/


#### Getting started

```CoffeeScript
# Copy ‚distance.coffee’ into your project’s ‚modules‘-folder

# Include module
distance = require „distance“

# Returns distance between two points (point1x, point1y, point2x, point2y) 
distance.twoPoints(point1x, point1y, point2x, point2y)

# Returns distance between current and start position of a draggable layer
distance.toDragStart
```