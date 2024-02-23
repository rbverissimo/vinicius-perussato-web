function navigateTo(url){
    window.location.href = url; 
}

document.getElementById('idioma-select').addEventListener('change', function() {
    var idiomaSelecionado = this.value;
    if (idiomaSelecionado !== '') {
      window.location.href = idiomaSelecionado;
    }
  });

  /**
   * Implementação do slider
   */
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function slideTo(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  function nextSlide() {
    if (currentIndex === slides.length - 1) {
      slideTo(0);
    } else {
      slideTo(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex === 0) {
      slideTo(slides.length - 1);
    } else {
      slideTo(currentIndex - 1);
    }
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  setInterval(nextSlide, 5000);