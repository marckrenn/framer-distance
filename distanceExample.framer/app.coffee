# 'distance' module example project V1.0
# by Marc Krenn, Sept. 2015 | marc.krenn@gmail.com | @marc_krenn

# Include module
distance = require "distance"

# Set background
bg = new BackgroundLayer backgroundColor: "#28affa"

# Create layer
layerA = new Layer
	width: 100
	height: 100
	backgroundColor: "#fff"
	borderRadius: "100%"

# Demo reference point
reference = new Layer
	width: 20
	height: 20
	backgroundColor: "#fff"
	borderRadius: "100%"
	opacity: 0
	index: 0

layerA.center()

# Enable dragging
layerA.draggable.enabled = true

# Show demo reference point
layerA.on Events.DragStart, ->
	reference.x = layerA.midX - reference.width/2
	reference.y = layerA.midY - reference.height/2
	reference.opacity = 0.5

layerA.on Events.DragMove, ->
	
	# Returns distance between current and start position of a draggable layer ('this' = 'layerA')
	print distance.toDragStart(this) 
	
	# Returns distance between two points (point1x, point1y, point2x, point2y)
	# print distance.twoPoints(0,0,layerA.midX,layerA.midY)
	
# Hide demo reference point		
layerA.on Events.DragEnd, ->
	reference.opacity = 0