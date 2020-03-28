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

    //Receive the "large" and "caption" parameters from the getFirst function.
    getClicked: function (lar, cap) {
        "use strict";

        //Get the nav.
        const nav = document.querySelector("nav");

        //Monitor nav. If figure is clicked, invoke function.
        nav.addEventListener("click", function (event) {

            if (event.target.parentNode.nodeName === "FIGURE") {

                //Retrieve the clicked image's source and alt description.
                const clkSrc = event.target.src;
                const clkAlt = event.target.alt;

                //Like above - remove the last seven spaces for larger imgage.
                const clkLg = clkSrc.substr(0, clkSrc.length - 7) + ".jpg";

                //Place the large image's source, alt, and caption.
                //Caption is the "alt" description placed in the figcaption.
                lar.src = clkLg;
                lar.alt = clkAlt;
                cap.textContent = clkAlt;
            }
        });
    } //close getClicked function.

}; //close "gallery" variable (let).