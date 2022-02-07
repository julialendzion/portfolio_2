let scrollTop = 0;
let index = 0;
const windowHeight = window.innerHeight;
const sections = document.querySelectorAll("section");
const navigation = document.querySelector(".navigation");
function resetSelection() {
  for (let i = 0; i < navigation.children.length; i++) {
    navigation.children[i].classList.remove("selected");
  }
}

//RELOAD when RESIZING THE SCREEN
let resizeTimeout;
window.addEventListener("resize", function (event) {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    window.location.reload();
  }, 500);
});

window.addEventListener("scroll", function () {
  scrollTop = window.scrollY;
  sections.forEach(function (section, i) {
    if (section.offsetTop < scrollTop + windowHeight / 2 && scrollTop < section.offsetTop + windowHeight / 2) {
      resetSelection();
      navigation.children[i].classList.add("selected");
    }
  });
});

navigation.querySelectorAll("li").forEach(function (item, i) {
  item.addEventListener("click", function () {
    resetSelection();
    window.scrollTo({
      top: i * windowHeight,
      behavior: "smooth",
    });
  });
});

gsap.to("#title2", {
  opacity: 100,
  x: "1vw",
  y: "1vw",
  duration: 1,
  ease: "ease-out",
  scrollTrigger: { trigger: "#title", start: "top 50%", end: "bottom 80%", scrub: true },
});

gsap.to("#title2", {
  opacity: 100,
  x: "0vw",
  y: "0",
  duration: 1,
  ease: "ease-out",
  scrollTrigger: { trigger: "#line", start: "top 50%", end: "bottom 80%", scrub: true },
});

gsap.to("#line", {
  y: "-35vw",
  opacity: 0,

  scrollTrigger: { trigger: "#line", start: "top 50%", end: "bottom 80%", scrub: true },
});

document.querySelectorAll(".letter").forEach((elm, i) => {
  elm.classList.add("ani");
  elm.style.animationDelay = `${i / 12}s`;
});

// gsap.to("#scroll", {
//   opacity: 0,
//   ease: "ease-out",
//   scrollTrigger: { trigger: "#line", start: "top 50%", end: "bottom 99%", scrub: true },
// });
gsap.to("#scroll", {
  opacity: 0,
  scrollTrigger: { trigger: "#line", start: "top 50%", end: "bottom 100%", scrub: true },
});

gsap.to("#title2", {
  y: "-25vw",
  scrollTrigger: { trigger: "#line", start: "top 20%", end: "bottom 90%", scrub: true },
});

// let coll = document.getElementsByClassName("collapsible");
// let i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     let content = this.nextElementSibling;
//     let child = this.firstElementChild;
//     let extra_js = child.firstElementChild;
//     let extra = extra_js.nextElementSibling;

//     if (content.style.display === "block") {
//       content.style.display = "none";
//       child.style.color = "var(--color-2)";
//       extra_js.style.display = "none";
//       extra.style.opacity = "100";
//       extra.style.position = "default";
//       // document.querySelector(".project_name>h1").style.color = "var(--color-2)";
//       // document.querySelector(".project_name>h1>.extra_js").style.display = "none";
//       // document.querySelector(".project_name>h1>.extra").style.opacity = "100";
//       // document.querySelector(".project_name>h1>.extra").style.position = "default";
//     } else {
//       content.style.display = "block";
//       child.style.color = "white";
//       extra_js.style.display = "block";
//       extra.style.opacity = "0";
//       extra.style.position = "absolute";
//       // document.querySelector(".project_name>h1").style.color = "white";
//       // document.querySelector(".project_name>h1>.extra_js").style.display = "block";
//       // document.querySelector(".project_name>h1>.extra").style.opacity = "0";
//       // document.querySelector(".project_name>h1>.extra").style.position = "absolute";
//     }
//   });
// }

/* This can be an external module */

// document.querySelector(".collapse-title").addEventListener("mouseover", hoverProjects);

// function hoverProjects() {
//   document.querySelector(".extra").style.display = "block";
//   // document.querySelector(".collapse-title").style.transform = "red";
//   document.querySelector(".collapse-title").addEventListener("mouseout", hoverOut);
// }
// function hoverOut() {
//   // document.querySelector(".collapse-title").style.color = "#ced0d5";
//   document.querySelector(".extra").style.display = "none";
// }

const accordionItem = document.querySelectorAll(".accordion-item");

const onClickAccordionHeader = (e) => {
  if (e.currentTarget.parentNode.classList.contains("active")) {
    e.currentTarget.parentNode.classList.remove("active");
  } else {
    Array.prototype.forEach.call(accordionItem, (e) => e.classList.remove("active"));
    e.currentTarget.parentNode.classList.add("active");
  }
};

const init = () => {
  Array.prototype.forEach.call(accordionItem, (e) => e.querySelector(".accordion-header").addEventListener("click", onClickAccordionHeader, false));
};

document.addEventListener("DOMContentLoaded", init);

// OUTLINE ANIMATION TO WORK ON

// const firstChild = document.querySelector(".accordion").firstElementChild;
// firstChild.addEventListener("click", showOutline);

// function showOutline() {
//   document.querySelector("#fisheroutline").classList.toggle("move");
// }

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("absolute").style.bottom = "0";
  } else {
    document.getElementById("absolute").style.bottom = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
