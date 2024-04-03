// Realiza un script que cuente el número de vocales que tiene un texto.

let vocales = prompt('ingrese un texto')

let resultado = 0;

vocales = vocales.toLowerCase();

for (let i = 0; i < vocales.length; i++) {
    
    if (
        vocales.at(i) === 'a' ||
        vocales.at(i) === 'e' ||
        vocales.at(i) === 'i' ||
        vocales.at(i) === 'o' ||
        vocales.at(i) === 'u' ||
        vocales.at(i) === 'á' ||
        vocales.at(i) === 'é' ||
        vocales.at(i) === 'í' ||
        vocales.at(i) === 'ó' ||
        vocales.at(i) === 'ú' ||
        vocales.at(i) === 'ü'
    ) {
        resultado++;
    }
}

console.log(resultado)