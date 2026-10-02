// Fade in every element with the "fade" class, 0.5s each,
// starting one after another with a tiny delay.
window.addEventListener("load", function () {
  var items = document.querySelectorAll(".fade");
  items.forEach(function (el, i) {
    setTimeout(function () {
      el.classList.add("show");
    }, i * 100);
  });
});