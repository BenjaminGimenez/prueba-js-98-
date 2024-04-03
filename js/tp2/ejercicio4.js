/*
4- Realiza un script que pida números hasta que se pulse “cancelar”.
 Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let sumaNumeros = 0;

while (true) {
  let numeros = prompt("Introduce un número:");

  
  if (numeros === null || numeros === "") { // Si se hace click cancelar o deja el campo vacío, se termina el bucle
    break;
  }

  
  let numero = parseFloat(numeros); // Convertir lo ingresado a un número

  
  if (!isNaN(numero)) { // Verifica si lo ingresado es un número válido
    
    sumaNumeros += numero; // Sumar el número al total
  } else {
    
    alert("introduce un número válido");
  }
}


alert("La suma total es " + sumaNumeros);

