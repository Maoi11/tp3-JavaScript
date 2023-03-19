// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tablaDeMultiplicar(x) {
  
  return document.write(`<h1>Tabla de multiplicar del n°${x}: </h1>
<table>
    <thead>
        <th>Factor</th>
        <th>N° elegido</th>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>${x * 1}</td>
        </tr>
        <tr>
            <td>2</td>
            <td>${x * 2}</td>
        </tr>
        <tr>
            <td>3</td>
            <td>${x * 3}</td>
        </tr>
        <tr>
            <td>4</td>
            <td>${x * 4}</td>
        </tr>
        <tr>
            <td>5</td>
            <td>${x * 5}</td>
        </tr>
        <tr>
            <td>6</td>
            <td>${x * 6}</td>
        </tr>
        <tr>
            <td>7</td>
            <td>${x * 7}</td>
        </tr>
        <tr>
            <td>8</td>
            <td>${x * 8}</td>
        </tr>
        <tr>
            <td>9</td>
            <td>${x * 9}</td>
        </tr>
        <tr>
            <td>10</td>
            <td>${x * 10}</td>
        </tr>
        
    </tbody>
</table>`);
}

let x = parseFloat(
    prompt("Ingrese un número para obtener su tabla de multiplicar")
  );

tablaDeMultiplicar(x);