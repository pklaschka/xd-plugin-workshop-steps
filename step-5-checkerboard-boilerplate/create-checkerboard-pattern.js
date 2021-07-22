const { Artboard } = require('scenegraph');
const createRectangle = require('./create-rectangle');

/**
 * Creates a checkerboard pattern that fills the artboard with `subdivisions` subdivisions
 * @param {Artboard} artboard
 * @param {number} subdivisions 
 */
function createCheckerboardPattern(artboard, subdivisions) {
    if (artboard instanceof Artboard) {
        // add code here
    } else {
        console.error('Not an artboard', artboard);
    }
}

module.exports = createCheckerboardPattern;