//The global variable (actually let)
let gallery;

//Monitor the page load. When the DOM is loaded, invoke the gallery.getFirst function
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    gallery.getFirst();

}); //close DOMContentLoaded function

//The "gallery" variable (let)
gallery = {

    getFirst: function () {
        "use strict";

         //Retrieve the first small image on the page
        const first = document.getElementById("first-small");

        //Retrieve its source and alt description
        const firstSrc = first.src;
        const firstAlt = first.alt;

        //Take the source and remove the last seven spaces ("-sm.jpg") to get the source for its larger version.
        const firstLarge = firstSrc.substr(0, firstSrc.length - 7) + ".jpg";

        //Retrieve the placeholders for the large image and its caption
        const large = document.getElementById("large");
        const caption = document.getElementById("caption");

        //Place the large image's source, alt, and caption. The caption is the "alt" description just placed in the figcaption.
        large.src = firstLarge;
        large.alt = firstAlt;
        caption.textContent = firstAlt;

        //Invoke the getClicked function. Pass along "large" and "caption" as parameters
        gallery.getClicked(large, caption);
    },

    //Receive the "large" and "caption" parameters from the getFirst function
    getClicked: function (lar, cap) {
        "use strict";

        //Monitor the "nav." When a figure is "clicked," invoke the function.
        document.querySelector("nav").addEventListener("click", function (e) {

            if (e.target.parentNode.nodeName === "FIGURE") {

                //Retrieve the clicked image's source and alt description
                const clickedSrc = e.target.src;
                const clickedAlt = e.target.alt;

                //Like above - take the source and remove the last seven spaces ("-sm.jpg") to get the source for its larger version.
                const clickedLarge = clickedSrc.substr(0, clickedSrc.length - 7) + ".jpg";

                //Place the large image's source, alt, and caption. The caption is the "alt" description just placed in the figcaption.
                lar.src = clickedLarge;
                lar.alt = clickedAlt;
                cap.textContent = clickedAlt;
            }
        });
    } //close getClicked function

}; //close "gallery" variable (let)