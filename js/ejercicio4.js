// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

let respuesta = ''

function esEntero (x) {
        if (x % 2 === 0) {
            respuesta = `El número ingresado es par.`;
        } else {
            respuesta = `El número ingresado es impar.`;
        }    
    return document.write(respuesta);
}

esEntero(parseInt(prompt('Ingrese un número entero para saber si es par o impar.')));