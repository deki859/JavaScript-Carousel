
let slideIndex = 1;


const showSides = (n) => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dots');

  
  // value can't be 0 or biger than slides length
  if (n > slides.length) {
    slideIndex = 1;
  }

  else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    if(dots[i].classList.contains('active')){
      dots[i].classList.remove('active');
    }
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add ('active');
  

}


// next or previous image
const plusSlide = (n) => {
  var n = 1;
  showSides(slideIndex = slideIndex + n);

};

const minusSlide = (n) => {
  var n = 1;
  showSides(slideIndex = slideIndex - n);

};


const next = document.querySelector('.next');
next.addEventListener('click', plusSlide)

const prev = document.querySelector('.prev');
prev.addEventListener('click', minusSlide);

const currentSlide = (n) => {
  showSides(slideIndex = n);
}


showSides(slideIndex);

