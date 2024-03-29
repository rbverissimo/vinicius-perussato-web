function navigateTo(url){
    window.location.href = url; 
}

function navigateOut(route){
  let url = '';
  let urlEncodedText = '';
  if(route === 'comgas-prototipo'){
    url = 'https://www.figma.com/proto/Jjgkqpw48WjWz13dWYuGMf/GESC?page-id=&type=design&node-id=53-50&viewport=586%2C-760%2C0.17&t=CIBxBMiyMv7oWByA-1&scaling=scale-down&starting-point-node-id=53%3A50';
  }

  if(route === 'linkedin'){
    url = 'https://www.linkedin.com/in/viniciusperussato/'
  }

  if(route === 'whatsapp-pt') {
    urlEncodedText = 'Olá,%20Vinícius!%20Como%20vai?%20Vi%20seu%20portifólio%20e%20gostaria%20de%20mais%20informações!'
    url = 'https://wa.me//5511970422497?text='+ urlEncodedText; 
  }

  if(route === 'whatsapp-en') {
    urlEncodedText = 'Hi,%20Vinícius!%20How%20are%20you%20doing?%20I%20just%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20have%20more%20info!'
    url = 'https://wa.me//5511970422497?text='+ urlEncodedText; 
  }

  window.open(url, '_blank');

}

  /**
   * Toggle do menu hamburguer
   */
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const overlay = document.querySelector('.overlay');
const overlayTransparent = document.querySelector('.overlay-transparent');

const bar1 = document.getElementById('bar-1');
const bar2 = document.getElementById('bar-2');
const bar3 = document.getElementById('bar-3');

menuToggle.addEventListener('click', toggleAsideMenu);
overlay.addEventListener('click', toggleAsideMenu);
overlayTransparent.addEventListener('click', toggleLang);

function toggleAsideMenu() {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    bar1.classList.toggle('hidden-bar');
    bar2.classList.toggle('rotate-over-45-bar');
    bar3.classList.toggle('rotate-under-45-bar');
}

function toggleLang() {
    var dropdownContent = document.getElementById("dropdown-lang-content");
    dropdownContent.classList.toggle("show");
    overlayTransparent.classList.toggle('active');
}

/**
 * Toggle do sub-menu "meu trabalho"
 */
const subMenuToggle = document.getElementById('sub-menu-toggle');
const subMenuMeuTrabalho = document.getElementById('sub-menu-meu-trabalho');
subMenuToggle.addEventListener('click', function(){
    subMenuMeuTrabalho.classList.toggle('active');
    subMenuToggle.classList.toggle('active');
})

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