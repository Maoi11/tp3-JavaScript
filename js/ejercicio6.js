// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)
// Ejemplo:
// Input:
// lado A = 24
// lado B = 5

// Output: 58


let ladoA = parseFloat(prompt(`Ingresar el valor del primer lado del rectangulo`));
let ladoB = parseFloat(prompt(`Ingresar el valor del segundo lado del rectángulo`));

function perimetroRectangulo(a, b) {
    if (!isNaN(ladoA) && !isNaN(ladoB)) {
        let p = 2*(ladoA + ladoB);
        return document.write(`El perímetro de su rectángulo es ${p}.`);

    } else {
        return document.write(`Usted no ingresó un valor de lado válido. No se puede calcular el perímetro.`);
    }
}

perimetroRectangulo(ladoA, ladoB);
