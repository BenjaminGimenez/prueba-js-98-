/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
*/

// 1. pedir cadena de texto (promt)
// 2. verificar si el cancelar es = null
// 3. si toco cancelar termina la ejecucion, sino tocar hasta que toque el cancelar

do{
    let texto = prompt('ingresa tu mejor chiste')

    if (texto === null) {
        //termina el bucle
        break;
    }
    alert(`tu chiste fue ${texto}`)
}while (true) 
    

