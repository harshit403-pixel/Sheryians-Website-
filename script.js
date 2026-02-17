const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const btn = document.querySelector("#faqbtn")
const svgbtn = btn.querySelector("#btnsvg")
const para = btn.querySelector("p")
const visible = btn.querySelector(".faqanswer")

btn.addEventListener("click", () => {
  const isOpen = visible.classList.contains("open")

  // TEXT + SVG
  svgbtn.classList.toggle("rotatesvg")
  para.classList.toggle("lightcoloring")

  if (isOpen) {
    // CLOSE
    visible.style.height = visible.scrollHeight + "px"
    requestAnimationFrame(() => {
      visible.style.height = "0px"
      visible.classList.remove("open")
    })
  } else {
    // OPEN
    visible.classList.add("open")
    visible.style.height = visible.scrollHeight + "px"
  }
})

// reset height to auto after open animation
visible.addEventListener("transitionend", () => {
  if (visible.classList.contains("open")) {
    visible.style.height = "auto"
  }
})


let naving = document.querySelector("nav")

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // scrolling DOWN
    naving.classList.add("navhidden");
  } else {
    // scrolling UP

    naving.classList.remove("navhidden");
  }

  lastScrollY = currentScrollY;
});

