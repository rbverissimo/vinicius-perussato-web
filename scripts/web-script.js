function navigateTo(url){
    window.location.href = url; 
}

function navigateOut(route){
  if(route === 'comgas-prototipo'){
    window.open('https://www.figma.com/proto/Jjgkqpw48WjWz13dWYuGMf/GESC?page-id=&type=design&node-id=53-50&viewport=586%2C-760%2C0.17&t=CIBxBMiyMv7oWByA-1&scaling=scale-down&starting-point-node-id=53%3A50', '_blank');
  }
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