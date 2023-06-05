//Ecuacion
function ecu(a, b, c){
    operacion = (-b + Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    console.log("El resultado de la ecuacion es: " + operacion);
}

ecu(1, 2, -15);

function ecuacion(a, b, c){
    operacion = (-b - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    console.log("El resultado de la ecuacion es: " + operacion);
}

ecuacion(1, 2, -15);

//Operacion de velocidad = distancia / tiempo
function vel(a, b){
    a = 50;
    b = 0.25;
    operacion = a / b;
    console.log("La distancia que recorre es de: "+a+" Km"+" y el tiempo en recorrer es de: "+b);
    console.log("La velocidad a la viaja es de :" + operacion +" km/hr");
}

vel();


//Operacion de velocidad = distancia / tiempo
function velo(a=50, b=0.25){
    operacion = a / b;
    console.log("La distancia que recorre es de: "+a+" Km"+" y el tiempo en recorrer es de: "+b);
    console.log("La velocidad a la viaja es de :" + operacion +" km/hr");
}
velo();


//Operacion de velocidad = distancia / tiempo
function velocidad(a, b){
    operacion = a / b;
    console.log("La distancia que recorre es de: "+a+" Km"+" y el tiempo en recorrer es de: "+b);
    console.log("La velocidad a la viaja es de :" + operacion +" km/hr");
}

velocidad(50, 0.25);