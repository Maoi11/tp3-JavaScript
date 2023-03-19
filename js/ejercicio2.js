// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


let ciudades = []

do {
    ciudades.push(prompt('Ingrese una ciudad para agregarla a la lista'));
} while (confirm('¿Desea seguir ingresando ciudades a la lista?'));

let cantidad = ciudades.length


document.write(`Las ciudades ingresadas son: ${ciudades}.<br>`);
document.write(`La cantidad de ciudades ingresadas es: ${cantidad}.<br>`);

document.write(`<ul>`)
document.write(`<li>La ciudad en la primera posición es ${ciudades[0]}.</li>`);
document.write(`<li>La ciudad en la tercera posición es ${ciudades[2]}.</li>`);
document.write(`<li>La ciudad en la última posición es ${ciudades[cantidad - 1]}.</li>`);

ciudades.push('París');

document.write(`<li>El elemento en segunda posición es ${ciudades[1]}.</li></ul>`);
ciudades.splice(1, 1, "Barcelona");

document.write(`<h1>Arreglo de ciudades</h1>`);
document.write(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>Elemento: ${ciudades[i]}.</li>`);
}
document.write(`</ul>`);





