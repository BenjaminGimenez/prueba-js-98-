
/*1 - Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
 si la edad ingresada no es un número válido indicarlo en un mensaje.*/


 //pedimos el numero para parsearlo
 let edad = parseInt(prompt('ingrese su edad'))


//validamos que la entrada sea un numero
if (isNaN(edad)) {
    alert('no es un numero')
}else{
    if (edad < 0) {
        alert('ingrese un numero valido')
        //validar si la edad igresada es valida para conducir
    }else if (edad >= 18) {
        alert('puede conducir')
        
    }else{
        alert('no puede conducir')
    }
}


