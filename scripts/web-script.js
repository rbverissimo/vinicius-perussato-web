function navigateTo(url){
    window.location.href = url; 
}

document.getElementById('idioma-select').addEventListener('change', function() {
    var idiomaSelecionado = this.value;
    if (idiomaSelecionado !== '') {
      window.location.href = idiomaSelecionado;
    }
  });


  document.getElementById('scroll-to-footer').addEventListener('click', function(event){
    event.preventDefault();

    const target = document.getElementById('target-footer');
    const posicaoTarget = target.getBoundingClientRect().top + window.scrollY;
    const posicaoInicial = window.scrollY;

    const distanciaScroll = posicaoTarget - posicaoInicial;
    const duracao = 1000;
    let inicioTempo = null;

    function scrollAnimation(tempo) {
        if (inicioTempo === null) inicioTempo = tempo;
        var tempoCorrido = tempo - inicioTempo;
        var scrollAmount = easeInOutQuad(tempoCorrido, posicaoInicial, distanciaScroll, duracao);
        window.scrollTo(0, scrollAmount);
        if (tempoCorrido < duracao) requestAnimationFrame(scrollAnimation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scrollAnimation);
  });