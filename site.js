//Global variable.
let gallery;

//When DOM loads, invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    gallery.getFirstThumb();
});

//The "gallery" variable (let).
gallery = {

    getFirstThumb: function () {
        "use strict";

        //Get first image with figure "small" class.
        const image = document.querySelector("figure.small img");

        //Invoke next functions.
        gallery.placeResult(image);
        gallery.getClickedThumb();
        gallery.getClickedArrow();
    },

    getClickedThumb: function () {
        "use strict";

        //Get the "gallery" section.
        const thumbnails = document.querySelector("section.thumbnails-box");

        //Add event listener. When user clicks, do this.
        thumbnails.addEventListener("click", function (event) {

            if (event.target.parentElement.className === "small") {

                //Get the event target. Invoke next function.
                const image = event.target;
                gallery.placeResult(image);
            }
        });
    },

}; //close "gallery" variable (let).