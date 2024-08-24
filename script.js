const back = document.querySelector(".back"),
      advance = document.querySelector(".advance"),
      slider = document.querySelector(".carousels"),
      sliderSections = document.querySelectorAll(".content"),
      dots = document.querySelectorAll(".dot");

let counter = 0;
const widthImg = 100 / sliderSections.length;


function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle('activo', i === counter);
    });
}


function moveToRight() {
    if (counter >= sliderSections.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slider.style.transform = `translateX(-${counter * widthImg}%)`;
    slider.style.transition = "transform 0.6s ease";
    updateDots();
}


function moveToLeft() {
    if (counter <= 0) {
        counter = sliderSections.length - 1;
    } else {
        counter--;
    }
    slider.style.transform = `translateX(-${counter * widthImg}%)`;
    slider.style.transition = "transform 0.6s ease";
    updateDots();
}


back.addEventListener("click", moveToLeft);
advance.addEventListener("click", moveToRight);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        counter = i;
        slider.style.transform = `translateX(-${counter * widthImg}%)`;
        slider.style.transition = "transform 0.6s ease";
        updateDots();
    });
});


updateDots();
