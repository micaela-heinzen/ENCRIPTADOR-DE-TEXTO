var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muñeco =  document.querySelector(".box-muñeco");
var h3 =  document.querySelector(".box-h3");
var parrafo =  document.querySelector(".box-parrafo");
var resultado =  document.querySelector(".texto-resultado");





botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;


function encriptar(){

    ocultarAdelante();
   
    var area = recuperarTexto()
    resultado.textContent= encriptarTexto(area)

}

function desencriptar(){

    ocultarAdelante();
    var area = recuperarTexto()
    resultado.textContent= desencriptarTexto(area)



}





function recuperarTexto(){

    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante(){

    muñeco.classList.add("ocultar");
    
    h3.classList.add("ocultar");
    
    parrafo.classList.add("ocultar");
}



function encriptarTexto(mensaje){

    var texto = mensaje;
    var textoFinal= "";


    for(var i=0; i < texto.length ; i++){

        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }

        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }

        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }

        else if(texto[i] == "o"){
            textoFinal= textoFinal + "ober"
        }

        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }

        else{

            textoFinal = textoFinal + texto[i];
        }


    }


    return textoFinal;
}



function desencriptarTexto(mensaje){

    var texto = mensaje;
    var textoFinal= "";


    for(var i=0; i < texto.length; i++) {

        if(texto[i] == "a"){
            textoFinal= textoFinal + "a"
            i = i+1;
        }

        else if(texto[i] == "e"){
            textoFinal= textoFinal + "e"
            i = i+4;
        }

        else if(texto[i] == "i"){
            textoFinal= textoFinal + "i"
            i = i+3;
        }

        else if(texto[i] == "o"){
            textoFinal= textoFinal + "o"
            i = i+3;
        }

        else if(texto[i] == "u"){
            textoFinal= textoFinal + "u"
            i = i+3;
        }

        else{

            textoFinal = textoFinal + texto[i];
        }


    }


    return textoFinal;
}



const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".box-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})