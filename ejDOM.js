//1.-Traer o referencia todos los elementos del HTML los vamos a guardar en varibles para poder utilizarlos despues

//Metodos de seleccion

let numeroContador = document.getElementById("numeroContador");
let botonIncrementar = document.getElementById("botonIncrementar");
let botonDecrementar = document.getElementById("botonDecrementar");
let botonResetear = document.getElementById("botonResetear");
let memeRandom = document.querySelector("#memeRandom");

//Declarar una variable con un estado inicial
var valorContador = 0;

//Logica de negocio

function incrementar() {
    valorContador++;
    numeroContador.innerHTML = valorContador;
    //si el valor de mi contador es 
    if(valorContador === 10){
    mostrarImagen();}
}
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();


function decrementar() {
    valorcontador--;
    numeroContador.innerHTML = valorContador;
}

function resetear() {
    valorContador = 0;
    numeroContador.innerHTML = valorContador;
}

//funcion para mostrar imagen 
//La intención de esta funcion es que cuando sea invocada, recorra el arreglo y tome uno de los elementos de forma aleatoria(index)

function mostrarImagen() {
    var coleccionImagenes = ["./meme1.png", "./meme2.png", "./meme3.png", "./meme4.png"];

    let indexRandom = Math.floor(Math.random()* coleccionImagenes.length);

    //obener la url o direccion de la imagen
    let urlAleatoria = coleccionImagenes[indexRandom];

    memeRandom.src = urlAleatoria;
    memeRandom.style.display ="block";
} 

/*
function decrementar()

function resetear()

function mostrarImagen()

/// evento con html

var parrafitos = document.getElementsByClassName("parrafos");
console.log(parrafitos);

function cambiaColor (color){
    parrafitos.style.color = "green";

}*/
