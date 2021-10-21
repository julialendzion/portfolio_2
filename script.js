var scrollTop = 0;
var index = 0;
const windowHeight = window.innerHeight;
const sections = document.querySelectorAll("section");
const navigation = document.querySelector(".navigation");
function resetSelection() {
  for (var i = 0; i < navigation.children.length; i++) {
    navigation.children[i].classList.remove("selected");
  }
}

//RELOAD when RESIZING THE SCREEN
var resizeTimeout;
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

gsap.to("#title", {
  y: "-25vw",
  opacity: 0,
  scrollTrigger: { trigger: "#line", start: "top 50%", end: "bottom 100%", scrub: true },
});

gsap.to("#title2", {
  y: "-25vw",
  opacity: 0,
  scrollTrigger: { trigger: "#line", start: "top 20%", end: "bottom 90%", scrub: true },
});

document.querySelector("#fisherbear").addEventListener("click", showFisher);
function showFisher() {
  gsap.to("#fisherbear_outline", {
    opacity: 100,
    x: "1vw",
    y: "1vw",
    duration: 2,
    ease: "ease-out",
  });
  gsap.to("#fisherbear_opis", {
    y: "2vw",
    opacity: 100,
    duration: 1000,
    ease: "ease-in",
  });
  document.querySelector("#fisherbear_opis").classList.remove("hidden");
}
