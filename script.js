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
