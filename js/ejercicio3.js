
// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.


let dado1 = 0;
let dado2 = 0;
let suma = 0;


let res2 = 0;
let res3 = 0;
let res4 = 0;
let res5 = 0;
let res6 = 0;
let res7 = 0;
let res8 = 0;
let res9 = 0;
let res10 = 0;
let res11 = 0;
let res12 = 0;


for (let i = 0; i < 50; i++) {
    dado1 = Math.floor(Math.random() * (6 - 1 + 1)+1);
    dado2 = Math.floor(Math.random() * (6 - 1 + 1)+1);
    suma = dado1 + dado2
    switch (suma) {
        case 2:
            res2++
            break;
        case 3:
            res3++
            break;
        case 4:
            res4++
            break;
        case 5:
            res5++
            break;
        case 6:
            res6++
            break;
        case 4:
            res4++
            break;
        case 5:
            res5++
            break;
        case 6:
            res6++
            break;
        case 7:
            res7++
            break;
        case 8:
            res8++
            break;
        case 9:
            res9++
            break;
        case 10:
            res10++
            break;
        case 11:
            res11++
            break;
        case 12:
            res12++
            break;

    }

}


let arreglo = [res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12]

console.log(arreglo)


document.write(`<table>
<thead>
     <th>Suma</th>
     <th>N° Apariciones</th>
 </thead>
 <tbody>
     <tr>
         <td>2</td>
         <td>${res2}</td>
     </tr>
     <tr>
         <td>3</td>
         <td>${res3}</td>
     </tr>
     <tr>
         <td>4</td>
         <td>${res4}</td>
     </tr>
     <tr>
         <td>5</td>
         <td>${res5}</td>
     </tr>
     <tr>
         <td>6</td>
         <td>${res6}</td>
     </tr>
     <tr>
         <td>7</td>
         <td>${res7}</td>
     </tr>
     <tr>
         <td>8</td>
         <td>${res8}</td>
     </tr>
     <tr>
         <td>9</td>
         <td>${res9}</td>
     </tr>
     <tr>
         <td>10</td>
         <td>${res10}</td>
     </tr>
     <tr>
         <td>11</td>
         <td>${res11}</td>
     </tr>
     <tr>
         <td>12</td>
         <td>${res12}</td>
     </tr>
 </tbody>
 </table>`);