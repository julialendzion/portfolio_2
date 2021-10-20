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
      // runAnimation();
    });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector("#svg_path");

    if (entry.isIntersecting) {
      square.classList.add("draw");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("draw");
  });
});

observer.observe(document.querySelector("#imgdiv"));
