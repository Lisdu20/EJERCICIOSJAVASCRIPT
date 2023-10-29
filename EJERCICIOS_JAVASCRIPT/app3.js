// Que pida dos números y diga el cociente de la división entre ellos, o sea que haga la división
//  y de el resultado, siempre y cuando alguno de los dos números no sean 0, esa validación debe hacerse antes de dividir.

let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
// isNaN intenta convertir el parámetro pasado a un número.
if (isNaN(numero1) || isNaN(numero2) || (numero1 === 0 || numero2 === 0)) {
    document.write("Asegúrate de que ninguno sea cero.");
} else {
    const cociente = numero1 / numero2;
    document.write("El cociente de la división es: " + cociente);
}

