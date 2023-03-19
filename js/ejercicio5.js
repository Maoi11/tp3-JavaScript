// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


function infoCadena (string) {

if ( cadena === cadena.toLowerCase()){
    return document.write (`El texto ingresado está completamente en minúsculas.`);
} else if (cadena === cadena.toUpperCase()) {
    return document.write (`El texto ingresado está completamente en mayúsculas.`);
} else {
    return document.write (`El texto ingresado combina mayúsculas y minúsculas.`);
}

}

let cadena = prompt('Ingrese una cadena de texto.');

infoCadena (cadena)
