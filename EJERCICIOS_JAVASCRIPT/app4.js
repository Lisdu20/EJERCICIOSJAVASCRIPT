// Programa que pida dos números y pregunte cuál operación quiere hacer con los números, sumar, restar, multiplicar o dividir.
// Pedir al usuario que ingrese dos números

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

let operacion = prompt("¿Qué operación deseas hacer? (suma, resta, multiplicación, división)").toLowerCase();

    switch (operacion) {
        case "suma":
            document.write(numero1 + " + " + numero2 + " = " + (numero1 + numero2));
            break;
        case "resta":
            document.write(numero1 + " - " + numero2 + " = " + (numero1 - numero2));
            break;
        case "multiplicacion":
            document.write(numero1 + " * " + numero2 + " = " + (numero1 * numero2));
            break;
        case "division":
            if (numero2 !== 0) {
                document.write(numero1 + " / " + numero2 + " = " + (numero1 / numero2));
            } else {
                document.write("No se puede dividir por 0.");
            }
            break;
        default:
            alert("Operación no válida. Escoge entre suma, resta, multiplicación o división.");
    }