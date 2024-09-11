const promptSync = require('prompt-sync');
const prompt = promptSync();
 
// Solicitar los tres números al usuario y convertirlos a números
let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));
let num3 = parseFloat(prompt("Introduce el tercer número:"));

// Verificar si los números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales.");
} else {
    // Guardar los números en un array
    let numeros = [num1, num2, num3];

    // Ordenar los array ( trabajando en la copia del array(...))
    let ordenadosMenorMayor = [...numeros].sort((a, b) => a - b);
    let ordenadosMayorMenor = [...numeros].sort((a, b) => b - a);

    // Imprimir los Resultados
    console.log("Números ingresados:", numeros.join(", "));
    console.log("Ordenados de menor a mayor:", ordenadosMenorMayor.join(", "));
    console.log("Ordenados de mayor a menor:", ordenadosMayorMenor.join(", "));
}
