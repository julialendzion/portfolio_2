"use strict";
window.addEventListener("DOMContentLoaded", loadSVG);
function loadSVG() {
  console.log("load the SVG");

  fetch("../img/svg_path.svg")
    .then((response) => response.text())
    .then((svgData) => {
      console.log("SVG loaded");

      // TODO: put the SVG into the DOM
      document.querySelector("#svg_path").innerHTML = svgData;
      // TODO: Start the animation
      runAnimation();
    });
}
