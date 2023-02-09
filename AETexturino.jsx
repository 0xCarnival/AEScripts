var selectedLayers = app.project.activeItem.selectedLayers;
var activeComp = app.project.activeItem;

if (activeComp instanceof CompItem) {
    for (var i = 0; i < selectedLayers.length; i++) {
        var myLayer = selectedLayers[i];

        // Add the expression to the position property
        var positionProperty = myLayer.property("Position");
        positionProperty.expression = "xPos = thisComp.width/2; yPos = thisComp.height/2; [xPos,yPos]";

        // Add the expression to the anchor point property
        var anchorPointProperty = myLayer.property("Anchor Point");
        anchorPointProperty.expression = "var fps = effect(\"FPS\")(\"Slider\"); scaleControl = Math.abs(scale[0]); randomPos = true; randomRot = true; if (randomPos == true) { posterizeTime(fps); if (randomRot == true) { safeMargin = Math.sqrt(Math.pow(thisComp.width/2,2) + Math.pow(thisComp.height/2,2)); xMin = safeMargin * (100/scaleControl); yMin = safeMargin * (100/scaleControl); xMax = width - xMin; yMax = height - yMin; } else if (rotation % 90 == 0 && rotation % 180 != 0) { xMin = thisComp.height/(scaleControl/50); yMin = thisComp.width/(scaleControl/50); xMax = width - xMin; yMax = height - yMin; } else { xMin = thisComp.width/(scaleControl/50); yMin = thisComp.height/(scaleControl/50); xMax = width - xMin; yMax = height - yMin; } xPos = random(xMin, xMax); yPos = random(yMin, yMax); } else { xPos = width/2; yPos = height/2; } [xPos,yPos]";

        // Add the FPS input control to the Effect Controls panel
        var fpsCtrl = myLayer.Effects.addProperty("Slider Control");
        fpsCtrl.name = "FPS";
        fpsCtrl.property("Slider").setValue(8);
    }
}
