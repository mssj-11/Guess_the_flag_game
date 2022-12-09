//  Array con las imagenes
let banderas = ["pa.svg", "bo.svg", "ad.svg", "gb.svg", "na.svg"];

//  Array con la opcion correcta
let correcta = [2,2,1,1,0];

let opciones = [];

opciones.push(["SUDAFRICA", "SINGAPUR", "PANAMA"]);
opciones.push(["PERU", "ITALIA", "BOLIVIA"]);
opciones.push(["TUNEZ", "ANDORRA", "ANTIGUA Y BARBUDA"]);
opciones.push(["UCRANIA", "REINO UNIDO", "MADAGASCAR"]);
opciones.push(["NAMIBIA", "OMAN", "ETIOPIA"]);


let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego(){
    //  Reseteo de las variables
    posActual = 0;
    cantidadAcertadas = 0;

    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();

}

//  Cargar banderas
function cargarBandera(){
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{// Entonces cargo las opciones
        limpiarOpciones();

        document.getElementById("imgBandera").src = "./img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//   Si acerto
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//    Entonces no acerto
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //  Letra correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarBandera,1000); //  Espera de 1 seg para cambiar de pregunta
}
function terminarJuego(){
    //  Ocultando las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //  Agregando los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio(){
    //  Ocultando las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}