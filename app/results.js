function placeResult(image) {

    // Receive image. Get its source and alt.
    const source = image.src;
    const alternative = image.alt;

    // Adjust image source to get source for its larger image.
    // In other words, you're removing "-sm.jpg".
    const sourceAdj = source.substr(0, source.length - 7) + ".jpg";

    // Get image with figure class "large". Set its source and alt.
    const large = document.querySelector("figure.large img");
    large.src = sourceAdj;
    large.alt = alternative;

    // Get caption element. Set its text.
    const caption = document.getElementById("caption");
    caption.textContent = alternative;
}

export {placeResult};