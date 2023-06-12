/*DOM

Cuando aprendemos a crear paginas web, normalmente comenzamos con la construccion de sitios que estan estructurados con HTML y que tienen CSS como fuente de estilo. Hasta este momento, nuestras paginas son estaticas. Si nosotros queremos convertir estas paginas a paginas dinamicas, debemos agregar JavaScript a la ecuacion. Debemos recordar que cuando hablamos de paginas dinamicas, nos referimos a paginas que cambian de acuerdo a los datos que nos envie el usuario, esto con el fin de brindar una experiencias mucho mas completa, ademas de tener tareas o acciones que se puedan automatizar.

DOM significa Document Object Model, o modelo de objetos de documento. Podemos hacer una analogia con un arbol, donde el DOM es el arbol y cada una de las etiquetas del HTML es un nodo o rama, ademas de que cada nodo puede tener una propiedad o un atributo, que es lo que nos permite saber que es lo que esta dentro de ese nodo.

Cuando nos referimos al DOM, nos referimos a esta estructura de arbol, que podremos modificar de forma rapida y dinamica desde el propio JS y donde podremos agregar, eliminar, modificar y cambiar el contenido de nuestras paginas. Gracias a que usamos JS para estas modificaciones, vamos a poder automatizar tareas que se realicen cuando el usuario haga alguna tarea determinada, como mover el raton, pulsar un boton, hacer click en alguna parte del documento, escribir un texto, etc.

En resumen, DOM es lo que nos permite manejar HTML con JavaScript a traves del navegador y podemos visualizarlo como un gran arbol, donde cada etiqueta puede representar un nodo, y cada nodo puede tener una propiedad o un atributo (hojitas de arbol); es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JS.

Elemetos del DOM 
Todos los elementos del DOM se condideran nodos.

-Documents (Es el nodo raíz)
-Element (Todas las etiquetas de HTML)
-Texto (Textos que esten adentro de las etiquetas)
-Atributos(Tosos los atributos que pueden llegar a tener las  etiquetas )
-Comentarios (Todos los comentarios del documento)

Comunicación entre HTML y JS utilizaremos nuestros amigos selectores 

Metodos de selección de elementos 
Son elementos que nos van a permitir seleccionar una o varios elementos o grupos de elllos del DOM . Estos metodos se utilizan en el documento, por eso se agrega un document.getElement

//getElementByID : busca elementos por su id
//getElementByClassName: busca por elementos por su clase
//getElementByTagName: busca elementos por si Tag name


*/

let parrafos = document.getElementById("parrafo1");

parrafos.innerHTML="Hola Felipe, bienvenido. Puedes comprar :D"

/*se pueden modificar su estilo sin tener que ir a css*/
parrafos.style.color="blue";

console.log(parrafos);
/*Esto se interpreta como objeto*/
console.log(typeof(parrafos));

var parrafitos = document.getElementsByClassName("parrafos");
console.log(parrafitos);

var parrafosEtiqueta = document.getElementsByTagName("p");

console.log(parrafosEtiqueta);

//Métodos más actuales
var parrafoQuerySelector = document.querySelector("#parrafo1");

var parrafoQuerySelector = document.querySelectorAll(".parrafos");

console.log(parrafoQuerySelector);

function cambiaColor (color){
    parrafos.style.color = color;
}
//Evento con Everlistener


const botonCambiarColor=document.querySelecetor("#botonCambiarColor");
botonCambiarColor.addEventListener("click", 
function(){
    alert("Hola, has presionado el boton para cambiar el color");
})




//Referenciar boton
// const botoncambiarcolor = document.querySelector("#cambiarColor");

// botoncambiarcolor.addEventListener("click", 
// function(){
//     alert("Has presionado el boton para cambiar el color");
// } )


/*
Elementos para crear y agregar elementos

1 Se crean
2 Se agregan

//Sintaxis para crear elementos
elementoPadre.createElement("tipoDeElemento");


*/

//Para crear elementos createElement()
const div = document.createElement("div");

//Para insertarlo appendchild
document.body.appendChild(div);

//Codigo para agregar una imagen a mi documento
var appendImg = document.createElement("img");
appendImg.src = "./img/meme2.jpg";
appendImg.alt = "Imagen sorpresa";

//2do insertar
document.body.appendChild(appendImg);
