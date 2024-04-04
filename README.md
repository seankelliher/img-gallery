[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/img-gallery?style=flat-square)](/LICENSE.txt)
## Image Gallery

Image gallery carousel, built with Vue.js. [View working component](https://sean-kelliher-img-gallery.netlify.app).

## Project Status

Project meets general accessibility (WACG) and cross-browser requirements. More testing with a dedicated services (e.g., Sauce Labs) would be helpful if deploying to production.

## Project Screen Shot

* Starting view - with first image displayed.
![screen shot of project](/screenshots/img-gallery-screenshot1.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`  

To Run Vue:

`npm run dev`   

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`.

## Reflection

My goal was to build an image gallery carousel with multiple ways to view images. The gallery has standard "next" and "previous" arrows, but also includes a thumbnail tray where users can click a thumbnail and immediately view the full-sized image and its caption.

The gallery is accessible as well. All elements that are "clickable" can also be "tabbed through" and activated by pressing a keyboard's "enter" key.

## Acknowledgments

* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance from Google's [Material Design](https://material.io/design).
* Shields from [Shields](https://shields.io).
* Photos by Sean Kelliher (me).