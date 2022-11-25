import {placeResult} from "./results.js";
import {getClickedArrow} from "./arrows.js";

function getClickedThumb() {
    "use strict";

    // Get the "gallery" section.
    const thumbnails = document.querySelector("section.thumbnails-box");

    // Add event listener. Monitor for click events.
    thumbnails.addEventListener("click", function (event) {

        if (event.target.parentElement.className === "small") {

            // Get the event target. Invoke next function.
            const image = event.target;
            placeResult(image);
        }
    });

    // Add event listener. Monitor for keyup events.
    thumbnails.addEventListener("keyup", function (event) {

        if (event.code === "Enter") {
            if (event.target.className === "small") {

                // Get the event target. Invoke next function.
                // Note: event.target differs when tabbing through elements.
                // We get child element to compensate.
                const image = event.target.children[0];
                placeResult(image);
            }
        }
    });
}

function getFirstThumb() {
    "use strict";

    // Get first image with figure "small" class.
    const image = document.querySelector("figure.small img");

    // Invoke next functions.
    placeResult(image);
    getClickedThumb();
    getClickedArrow();
}

export {getClickedThumb, getFirstThumb};