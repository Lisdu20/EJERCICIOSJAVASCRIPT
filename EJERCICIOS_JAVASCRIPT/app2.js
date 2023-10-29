// Que pida un número y diga si es par o impar.
let numero = prompt("Ingresa un número:");

numero = parseInt(numero);
// % Operador binario. Devuelve el resto entero de dividir los dos operandos.
    if (numero % 2 === 0) {
        document.write(numero + " es un número par.");
    } else {
        document.write(numero + " es un número impar.");
    }
