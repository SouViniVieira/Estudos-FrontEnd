function tocaSom (idElementoAudio) {
   document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//Enquanto
for (let contador = 0; < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1]
    //Template string
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);
    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    }

}
