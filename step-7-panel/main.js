const { selection, Artboard } = require("scenegraph")
const { editDocument } = require("application");
const createCheckerboardPattern = require("./create-checkerboard-pattern");

let panel;

function create() {
    const HTML =
        `
        <form method="dialog" id="main">
            <label>
                Subdivisions:
                <input type="number" min="2" max="32" value="8" step="1" />
            </label>
            <footer>
                <button id="ok" type="submit" uxp-variant="cta">Apply</button>
            </footer>
        </form>
        `

    panel = document.createElement("div");
    panel.innerHTML = HTML;

    panel.querySelector("form").addEventListener("submit", () => {
        editDocument(() => {
            createCheckerboardPattern(
                selection.items[0],
                panel.querySelector('input').value
            );
        })
    });

    return panel;
}

function show(event) {
    if (!panel) event.node.appendChild(create());
}

function update() {
}

module.exports = {
    panels: {
        createCheckerboardPattern: {
            show,
            update
        }
    }
};
