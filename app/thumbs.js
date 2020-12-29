import {placeResult} from "./results.js";
import {getClickedArrow} from "./arrows.js";

function getClickedThumb() {
    "use strict";

    //Get the "gallery" section.
    const thumbnails = document.querySelector("section.thumbnails-box");

    //Add event listener. When user clicks, do this.
    thumbnails.addEventListener("click", function (event) {

        if (event.target.parentElement.className === "small") {

            //Get the event target. Invoke next function.
            const image = event.target;
            placeResult(image);
        }
    });
}

function getFirstThumb() {
    "use strict";

    //Get first image with figure "small" class.
    const image = document.querySelector("figure.small img");

    //Invoke next functions.
    placeResult(image);
    getClickedThumb();
    getClickedArrow();
}

export {getClickedThumb, getFirstThumb};