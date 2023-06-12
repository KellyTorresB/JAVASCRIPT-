
let tareas = [
    {
        id: 1,
        titulo: "Baniar al perro",
        estatus: true,
    },
    {
        id: 2,
        titulo: "Preparar la comida",
        estatus: false,
    }
]

//Enviar ese arreglo al servidor
let tareasJSON = JSON.stringify(tareas);
console.log(tareasJSON);

//Ejmeplo del carrito de compra

//Declarar un arreglo de objeto vacios
let carritoCompras = [];

let producto = {
    id: 1,
    nombre: "Camisa de pokemon",
    precio: 299.99,
    cantidad: 1,
};
//Mostrar informacion del carrito de compras 
console.log("Tienes",carritoDeCompras.length,"productos en tu carrito"); //undefined

//agregar un nuevo producto a mi carrito de compras
carritoCompras.push(producto);
console.log(carritoCompras.length);//
/*
function agregarProducto {
    carritoDeCompras.push(objeto);
}

boton.EventListener("click", agregarProducto);
*/

//Muestra la nueva informacion de mi carrito
console.log("Tienes", carritoDeCompras.length, "Productos en tu carrito");//

//actualizar la cantidad de productos en el carrito
const productoId = 1;
const nuevaCantidad = 3;
let productoExiste = carrito.find(productoId === producto.id);

console.log("Tienes", carritoDeCompras.length, "Productos en tu carrito"); //1

