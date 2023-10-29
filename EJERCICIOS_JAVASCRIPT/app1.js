// Programa que pida 2 números y que nos diga cuál es mayor, menor y si son iguales.
let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

    if (numero1 > numero2) {
        document.write(numero1 + " es mayor que " + numero2);
    } else if (numero1 < numero2) {
        document.write(numero1 + " es menor que " + numero2);
    } else {
        document.write("Los números son iguales.");
    }
