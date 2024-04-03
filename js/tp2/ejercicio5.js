/*
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’


*/

while (true) {
    let dni = prompt("ingrese su DNI:");
  
    // Si el usuario pulsa cancelar o deja el campo vacío, salimos del bucle
    if (dni === null || dni === "") {
      break;
    }
  
    // Convertir el input a un número
    let numeroDNI = parseInt(dni);
  
    // Verificar si el input es un número válido
    if (isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999) {
      // Array de letras para el DNI
      let letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
  
      // Calcular la letra del DNI
      let letra = letrasDNI.charAt(numeroDNI % 23);
  
      alert("La letra de tu DNI es: " + letra);
    } else {
      // Mostrar un alert si el input no es un número válido
      alert("introduce un número de DNI válido.");
    }
  }
