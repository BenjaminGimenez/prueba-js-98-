//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt('ingrese un texto');

let textoMinuscula = texto.toLowerCase();

const vocales = ['a', 'e', 'i', 'o', 'u']; //hice un arreglo para definir las vocales

let posicion = -1; //para que empiece buscando la primera vocal

for (let i = 0; i < texto.length; i++) {

    if (vocales.includes(texto[i])) { //al includes lo usea para verificar si es cierto que hay una vocal o no.

        posicion = i + 1; 
        break;
    }
}

// Mostrar la posición de la primera vocal
if (posicion !== -1) {
    alert("La primera vocal esta en : " + posicion);
} else {
    alert("No hay vocales");
}