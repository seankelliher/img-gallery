import {placeResult} from "./results.js";

function getClickedArrow() {
    "use strict";

    //Get the figure class "large" element.
    const large = document.querySelector("figure.large");

    //Add an event listener.
    large.addEventListener("click", function (event) {

        //Get the img within figure class "large".
        const largeImage = large.querySelector("img");

        //Get its source. Adjust source to add "-sm.jpg".
        const source = largeImage.src;
        const sourceAdj = source.substr(0, source.length - 4) + "-sm.jpg";

        //Gather all the figure class "small" elements.
        const images = document.querySelectorAll("figure.small img");

        //Convert to "real array" (works without this step too).
        const imagesArray = Array.from(images);

        //Run all figure class "small" elements through a loop.
        //Push their source to a new array named "basket".
        const basket = [];

        imagesArray.forEach(function (item) {
            basket.push(item.src);
        });

        //Get the array length.
        const length = basket.length;

        //Get position of "selected" image within array.
        const io = basket.indexOf(sourceAdj);

        //Mutable image variable.
        let image;

        //Clicking previous/next arrow, moves you down/up in array.
        //But it's "circular".
        //The item before the first item is the last item.
        //The item after the last item is the first item.
        if (event.target.id === "previous-arrow") {
            if (io === 0) {
                image = imagesArray[length - 1];
                placeResult(image);
            } else {
                image = imagesArray[io - 1];
                placeResult(image);
            }
        } else if (event.target.id === "next-arrow") {
            if (io === length - 1) {
                image = imagesArray[0];
                placeResult(image);
            } else {
                image = imagesArray[io + 1];
                placeResult(image);
            }
        }
    });
}

export {getClickedArrow};