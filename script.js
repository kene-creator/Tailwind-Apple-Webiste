const btn = document.querySelector(".btn");
const callToAction = document.querySelector(".call-to-action");
const allSections = document.querySelectorAll(".section");

btn.addEventListener("click", function () {
  document.getElementById("collapse-nav").classList.toggle("hidden");
  document.getElementById("collaspe-nav").classList.toggle("block");
});

btn.addEventListener("click", function () {
  callToAction.style.backgroundColor = "#121212";
  callToAction.style.color = "#ffff";
});

const revealSections = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
