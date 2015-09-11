# 'distance' module v1.0
# by Marc Krenn, Sept. 2015 | marc.krenn@gmail.com | @marc_krenn
#
# Add the following line to your project in Framer Studio. 
# distance = require "distance"

startcord = false
startX = 0
startY = 0
dist = 0.0

# Returns distance between current and start position of a draggable layer
exports.toDragStart = (layer) ->
        
    if startcord is false
        startX = layer.x
        startY = layer.y
        startcord = true

    dist = Math.sqrt( (startX - layer.x) ** 2 + (startY - layer.y) ** 2 )   
    
    layer.on Events.DragEnd, ->
        
        startcord = false
       
    return dist
        
    
# Returns distance between two points (point1x, point1y, point2x, point2y)
exports.twoPoints = (p1x, p1y, p2x, p2y) ->       
        
    dist = Math.sqrt( (p1x - p2x) ** 2 + (p1y - p2y) ** 2 )
              
    return dist