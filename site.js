//Global variable.
let gallery;

//When DOM loads, invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    gallery.getFirstThumb();
});

//The "gallery" variable (let).
gallery = {

    getFirst: function () {
        "use strict";

         //Retrieve the first small image on the page.
        const first = document.getElementById("first-small");

        //Retrieve its source and alt description.
        const firstSrc = first.src;
        const firstAlt = first.alt;

        //Take the source and remove the last seven spaces ("-sm.jpg").
        //This is the source for its larger version.
        const firstLarge = firstSrc.substr(0, firstSrc.length - 7) + ".jpg";

        //Retrieve the placeholders for the large image and its caption.
        const large = document.getElementById("large");
        const caption = document.getElementById("caption");

        //Place the large image's source, alt, and caption.
        //The caption is the "alt" description just placed in the figcaption.
        large.src = firstLarge;
        large.alt = firstAlt;
        caption.textContent = firstAlt;

        //Invoke the getClicked function.
        //Pass along "large" and "caption" as parameters.
        gallery.getClicked(large, caption);
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