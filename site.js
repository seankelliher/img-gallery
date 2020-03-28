//Global variable.
let gallery;

//When DOM loads, invoke function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    gallery.getFirstThumb();
});

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

    getClickedArrow: function () {
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

            //Convert to "real array".
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
                    gallery.placeResult(image);
                } else {
                    image = imagesArray[io - 1];
                    gallery.placeResult(image);
                }
            } else if (event.target.id === "next-arrow") {
                if (io === length - 1) {
                    image = imagesArray[0];
                    gallery.placeResult(image);
                } else {
                    image = imagesArray[io + 1];
                    gallery.placeResult(image);
                }
            }
        });
    },

    placeResult: function (image) {

        //Receive image. Get its source and alt.
        const source = image.src;
        const alternative = image.alt;

        //Adjust image source to get source for its larger image.
        //In other words, you're removing "-sm.jpg".
        const sourceAdj = source.substr(0, source.length - 7) + ".jpg";

        //Get image with figure class "large". Set its source and alt.
        const large = document.querySelector("figure.large img");
        large.src = sourceAdj;
        large.alt = alternative;

        //Get caption element. Set its text.
        //const caption = document.querySelector("figure.large figcaption");
        const caption = document.getElementById("caption");
        caption.textContent = alternative;
    }

}; //close "gallery".