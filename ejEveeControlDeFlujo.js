//pte
//Ejercicio de Evee
var elementosEvolucion = prompt("Ingresa el elemento con el que evolucionarias a tu pokemon");

switch(elementosEvolucion){
    case "piedraFuego":
        console.log("Tu Evee ha evolucionado a Flareon");
        break;
    
    case "piedraTrueno":
        console.log("Tu Evee ha evolucionado a jolteaon");
        break;

    case "piedraAgua":
        console.log("Tu Eevee evoluciono a Vaporeon");
        break;

    case "esDeMañana":
        console.log("Tu Eevee evoluciono a Espeon");
        break;

    case "esDeNoche":
        console.log("Tu Eevee evoluciono a Umbreon");
        break;

    case "rocaMusgo":
        console.log("Tu Eevee evoluciono a Leafeon");
        break;

    case "rocaHielo":
        console.log("Tu Eevee evoluciono a Glaceon");
        break;

    case "conoceMovimientoHada":
        console.log("Tu Eevee evoluciono a Sylveon");
        break;

    default:
        console.log("mantienes tu Eevee sin evolucionar");
        break;

}