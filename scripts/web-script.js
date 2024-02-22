function navigateTo(url){
    window.location.href = url; 
}

document.getElementById('idioma-select').addEventListener('change', function() {
    var idiomaSelecionado = this.value;
    if (idiomaSelecionado !== '') {
      window.location.href = idiomaSelecionado;
    }
  });