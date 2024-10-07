//This is for toggling the "light-theme" class on/off
document.querySelector("#toggle-theme").addEventListener("click", () => {
  document.documentElement.classList.toggle("light-theme");
});

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (prefersLight) {
  document.documentElement.classList.add("light-theme");
}

//This is for the arrow in the intro section
document.querySelector("#scroll-down").addEventListener("click", () => {
  window.scrollTo({
      top: document.querySelector("#about-me").offsetTop - 20,
  });
});


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel_text")

  if (n > slides.length) {slideIndex = slides.length}
  if (n < 1) {slideIndex = 1}

  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active")
  }

  slides[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

let slideIndex = 1;
showSlides(slideIndex);

const previous = document.querySelector("#previous_btn");
previous.addEventListener("click", () => {
  plusSlides(-1);
})

const next = document.querySelector("#next_btn");
next.addEventListener("click", () => {
  plusSlides(1);
})