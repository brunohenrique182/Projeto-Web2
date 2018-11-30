function toggle(c) {

    var imgName = document.querySelector("#anuncio").src;
    if (imgName.indexOf("teclado-anuncio.jpg") > 0) {
        document.querySelector("#anuncio").src = "assets/resources/images/anuncio-pc.jpg";
    } else {
        document.querySelector("#anuncio").src = "assets/resources/images/teclado-anuncio.jpg";
    }

}

chave = setInterval(toggle, 10000);
