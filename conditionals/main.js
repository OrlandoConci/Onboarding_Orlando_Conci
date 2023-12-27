console.log("Starting javascript...")

//--------------------------------- Difficulty Level: Low ---------------------------------

let num1 = 4
let num2 = 5

if (num1 > num2) {
    console.log(`Es mayor es: ${num1}`)
} else {
    console.log(`El mayor es: ${num2}`)
}


if (num1 > num2) {
    console.log(`Es mayor es: ${num1}`)
} else if (num1 == num2) {
    console.log(`Los números son iguales`)
} else {
    console.log(`El mayor es: ${num2}`)
}

if (num1 == num2) {
    console.log(`Los números son iguales.`)
} else {
    console.log(`Los números no son iguales`)
}

let date1 = "2018-9-2"
let date2 = "2023-7-5"

if (date1 > date2) {
    console.log(`La fecha ${date1} es mayor que ${date2}`)
} else if (date2 > date1) {
    console.log(`La fecha ${date2} es mayor que ${date1}`)
} else {
    console.log(`Las fechas son las mismas`)
}

date1 = "2022-12-2"
date2 = "2020-3-2"

if (date1 > date2) {
    console.log(`La fecha ${date1} es mayor que ${date2}`)
} else if (date2 > date1) {
    console.log(`La fecha ${date2} es mayor que ${date1}`)
} else {
    console.log(`Las fechas son las mismas`)
}

let number1 = 5
let number2 = 7
let number3 = 9

if (number1 > number2 && number1 > number3) {
    console.log(`El mayor números es ${number1}.`)
} else if (number2 > number1 && number2 > number3) {
    console.log(`El mayor número es ${number2}.`)
} else if (number3 > number1 && number3 > number2) {
    console.log(`El mayor número es ${number3}.`)
} else {
    console.log(`Los números ${number1}, ${number2}, ${number3} son iguales.`)
}

//--------------------------------- Difficulty Level: Medium ---------------------------------

let colorIngresado = prompt("Ingrese 'rojo', 'azul' o 'verde': ")

switch (colorIngresado){
    case "rojo":
        console.log("El color de la pasión")
        break
    case "azul":
        console.log("El color del mar.")
        break
    case "verde":
        console.log("El color de la naturaleza.")
        break
    default:
        console.log("Ingreso incorrecto")
        break
}

let numero1 = +prompt("Ingrese el número 1 (valor del 1 al 100):")
let numero2 = +prompt("Ingrese el número 2 (valor del 1 al 100):")
let operador = prompt("Operación a realizar entre los números: (suma, resta, multiplicacion, division)")

if (numero1 >= 1 && numero1 <= 100 && numero2 >= 1 && numero2 <= 100 && (operador == "suma" || operador == "resta" || operador == "multiplicacion" || operador == "division") ) {
    switch (operador) {
        case "suma":
            alert(`La suma entre ${numero1} y ${numero2} es: ${numero1 + numero2}`)
            break;
        case "resta":
            alert(`La resta entre ${numero1} y ${numero2} es: ${numero1 - numero2}`)
            break;
        case "multiplicacion":
            alert(`La multiplicacion entre ${numero1} y ${numero2} es: ${numero1 * numero2}`)
            break;
        case "division":
            alert(`La division entre ${numero1} y ${numero2} es: ${numero1 / numero2}`)
            break;
    }
} else {
    console.error("datos ingresados incorrectos.")
}

let persona1 = {
    name: "Juan",
    age: 39,
    height: 1.69
}

let persona2 = {
    name: "Rosa",
    age: 50,
    height: 1.55
}

if (persona1.height > persona2.height && persona1.age > persona2.age) {
    console.log(`${persona1.name} es mayor y más alto que ${persona2.name}`)
} else if (persona2.height > persona1.height && persona2.age > persona1.age) {
    console.log(`${persona2.name} es mayor y más alta que ${persona2.name}`)
} else if (persona1.height > persona2.height) {
    console.log(`${persona1.name} es más alto que ${persona2.name}, y ${persona2.name} es mayor que ${persona1.name}`)
} else if (persona2.height > persona1.height) {
    console.log(`${persona2.name} es más alta que ${persona1.name}, y ${persona1.name} es mayor que ${persona2.name}`)
}

let nombre = prompt("Ingresa tu nombre")
let edad = Number(prompt("Ingresa tu edad"))
let altura = Number(prompt("Ingresa tu altura"))
let vision = Number(prompt("Ingresa tu vision del 1 al 10"))

if (edad >= 18 && altura > 110 && vision >= 8) {
    console.log("Tu estás calificado para manejar")
} else {
    console.log("No te encuentras apto para manejar")
}

let edadIngresada = Number(prompt("Ingrese la edad a evaluar"))


if (edadIngresada >= 0 && edadIngresada <= 12) {
    alert(`Es un infante.`)
} else if (edadIngresada >= 13 && edadIngresada <= 18) {
    alert(`Es un adolescente.`)
} else if (edadIngresada >= 19 && edadIngresada <= 45) {
    alert(`Es un joven adulto.`)
} else if (edadIngresada >= 45 && edadIngresada <= 100) {
    alert(`Es un anciano.`) 
} else if (edadIngresada > 100) {
    alert(`Es realmente tan viejo?.`)
} else {
    alert(`Edad inválida`)
}

let opcion = Number(prompt("Ingrese un valor del 1 al 3"))
if (opcion >= 1 && opcion <= 3) {
    let valorNUmero = Number(prompt("Ingrese un número aleatorio"))
    switch (opcion) {
        case 1:
            alert(`El número ingresado es ${valorNUmero}.`)
            break;
        case 2:
            alert(`El doble del número ingresado es ${valorNUmero*2}.`)
            break;
        case 3:
            alert(`El triple del número ingresado es ${valorNUmero*3}.`)
            break;
        default:
            alert(`El valor no está permitido.`)
            break;
    }
} else {
    alert(`Datos ingresados NO válidos`)
}

//--------------------------------- Difficulty Level: High ---------------------------------

let nombreCliente = prompt("Ingrese el nombre del cliente")
let pase = prompt("Tipo de pase (Ingrese número 1-vip  2-normal)")
let entrada = prompt("Tiene entrada? (Ingrese número 1-sí o 2-no)")

let mensajeDeBienvenida = `Bienvenido ${nombreCliente} al club! Puede pasar.`
let mensajeDeDespedida = `Espero verte en otro momento, nos vemos!`

if (nombreCliente.toLowerCase() == "orlando" || pase == 1) {
    alert(mensajeDeBienvenida)
} else if (entrada == 1) {
    if (confirm("Desea usar su entrada?")) {
        alert(mensajeDeBienvenida)
    } else {
        alert(mensajeDeDespedida)
    }
} else if (nombreCliente.toLocaleLowerCase !== "orlando" || pase == 2 || entrada == 2) {
    if (!confirm("¿Desea comprar una entrada?")){
        alert(mensajeDeDespedida)
    } else {
        let dineroDisponible = prompt("Ingrese dinero disponible")
        if (dineroDisponible >= 1000) {
            alert(`Compra exitosa, ${mensajeDeBienvenida}`)
        } else {
            alert(`Lo sentimos, monto insuficiente.`)
        }
    }
}

//--------------------------------- Fin ---------------------------------
