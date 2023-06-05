var elementoEvolucion = prompt("ingresa el elemento con el que evolucionarás tu pokemon");

switch (elementoEvolucion) {
    case "piedraFuego":
        console.log("Tu Evee ha evolucionado a Flaresron")
        break;
    case "piedraElectrica":
        console.log("Tu Eevee ha ecolucionado a Electrico")
        break;
    default: console.log("buuuhh no jaló con esa piedrs")

}

var horoscopoDeHoy = prompt("Ingrsa tu horoscopo, por favor")

switch (horoscopoDeHoy) {
    case "Aries":
        console.log("Empieza a preparar hoy mismo tu estrategia para avanzar en tu vida profesional, Aries");
        break;
    case "Tauro":
        console.log("Estás de lunes subido, Tauro, y a tu desánimo se une hoy que no te salen las cosas como esperas, claro que la causa-efecto quizá sea a la inversa.");
        break;
    case "Géminis":
        console.log("Te espera hoy un momento magnífico en el trabajo, Géminis. ");
        break;
    case "Cáncer":
        console.log("Profesionalmente hoy puede llegarte un momento destacado y ser reconocida por algo que has hecho muy bien, Cáncer.");
        break;
    case "Leo":
        console.log("Hoy podría salirte la oportunidad que esperabas para cambiar de trabajo, Leo.");
        break;
    case "Virgo":
        console.log("No se te presenta mal el día, Virgo, al contrario, hoy tendrás muchos motivos de satisfacción durante la jornada laboral, más de los que sueles tener a diario. ");
        break;
    case "Libra":
        console.log("Te cuesta mucho enfrentarte los lunes a un  exceso de trabajo, Libra, mucha responsabilidad y un montón de cargas, como te pasa hoy. Te las has buscado solita. ");
        break;
    case "Escorpio":
        console.log("Tendrás hoy un encuentro, o recibirás una llamada, quizá un mensaje, de un antiguo compañero de estudios, Escorpio. ");
        break;
    case "Sagitario":
        console.log("Tu trabajo y tu bolsillo están en un buen momento, Sagitario. ");
        break;
    case "Capricornio":
        console.log("Estás hoy “de lunes”, Capricornio, con los ánimos por los suelos y pensando que en realidad el trabajo que haces a diario es un aburrimiento.");
        break;
    case "Acuario":
        console.log("Hoy será un lunes nada corriente, Acuario.");
        break;
    case "Piscis":
        console.log("Te ha llegado el momento de brillar de nuevo en tu trabajo, Piscis.");
        break;
    default:console.log("No, Patricio no Ofluco no es un signo oficial, favor de introducir uno valido ");

}