class Empleado {
    constructor(nombre, rfc, noDiasTrabajados, sueldoPorDia) {
        this.nombre = nombre;
        this.rfc = rfc;
        this.noDiasTrabajados = noDiasTrabajados;
        this.sueldoPorDia = sueldoPorDia;
    }

    calcularSueldoBruto() {
        return this.noDiasTrabajados * this.sueldoPorDia;
    }

    calcularSueldoNeto() {
        const sueldoBruto = this.calcularSueldoBruto();
        const isr = 0.31; // Tasa de ISR del 31%
        return sueldoBruto * (1 - isr);
    }
}

const empleados = [
    new Empleado("Empleado 1", "RFC1", 7, 156.78),
    new Empleado("Empleado 2", "RFC2", 7, 156.78),
    new Empleado("Empleado 3", "RFC3", 7, 156.78),
    new Empleado("Empleado 4", "RFC4", 7, 156.78),
    new Empleado("Empleado 5", "RFC5", 7, 156.78),
];

// Función para calcular y mostrar los sueldos quincenales y mensuales de los empleados
function calcularSueldos() {
    for (const empleado of empleados) {
        const sueldoQuincenal = empleado.calcularSueldoBruto() * 2;
        const sueldoMensual = empleado.calcularSueldoBruto() * 4;

        const sueldoNetoQuincenal = empleado.calcularSueldoNeto() * 2;
        const sueldoNetoMensual = empleado.calcularSueldoNeto() * 4;

        console.log(`Empleado: ${empleado.nombre}`);
        console.log(`RFC: ${empleado.rfc}`);
        console.log(`Sueldo bruto quincenal: $${sueldoQuincenal.toFixed(2)}`);
        console.log(`Sueldo bruto mensual: $${sueldoMensual.toFixed(2)}`);
        console.log(`Sueldo neto quincenal: $${sueldoNetoQuincenal.toFixed(2)}`);
        console.log(`Sueldo neto mensual: $${sueldoNetoMensual.toFixed(2)}`);
        console.log("-----------------------------------");
    }
}

// Llamada a la función para calcular y mostrar los sueldos
calcularSueldos();
