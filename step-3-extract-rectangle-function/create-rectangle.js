const { Artboard, Rectangle, Color } = require('scenegraph');

/**
 * Draws a rectangle at position (x,y) with dimensions (width,height) and
 * hexColoar as fill
 * @param {Artboard} artboard 
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {string} hexColor
 */
function createRectangle(artboard, x, y, width, height, hexColor) {
    const rect = new Rectangle(); // build a new rectangle

    rect.width = width; // give it its width ...
    rect.height = height; // ... and height.

    rect.strokeEnabled = false; // disable that default stroke
    rect.fill = new Color(hexColor); // and fill the rectangle with its color

    artboard.addChild(rect); // add the rectangle as a direct child of the arbtoard

    // and place it in the right coordinates
    rect.placeInParentCoordinates({ x: 0, y: 0 }, { x: x, y: y });
}

module.exports = createRectangle;