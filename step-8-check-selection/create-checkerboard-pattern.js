const { Artboard } = require('scenegraph');
const createRectangle = require('./create-rectangle');

/**
 * Creates a checkerboard pattern that fills the artboard with `subdivisions` subdivisions
 * @param {Artboard} artboard
 * @param {number} subdivisions 
 */
function createCheckerboardPattern(artboard, subdivisions) {
    if (artboard instanceof Artboard) {
        const rectangleWidth = artboard.width / subdivisions;
        const rectangleHeight = artboard.height / subdivisions;

        for (let row = 0; row < subdivisions; row++) {
            for (let col = 0; col < subdivisions; col++) {
                // if ((row % 2 === 0 && col % 2 !== 0) || (row % 2 !== 0 && col % 2 === 0)) {
                if ((row + col) % 2 !== 0) {
                    const x = rectangleWidth * col;
                    const y = rectangleHeight * row;

                    createRectangle(
                        artboard,
                        x,
                        y,
                        rectangleWidth,
                        rectangleHeight,
                        '#000'
                    );
                }
            }
        }
    } else {
        console.error('Not an artboard', artboard);
    }
}

module.exports = createCheckerboardPattern;