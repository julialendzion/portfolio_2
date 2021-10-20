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
