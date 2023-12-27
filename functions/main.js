console.log("Starting Javascript...")

//------------------------------------ Difficulty Level: Low ------------------------------------

function add(num1, num2) {
    return num1 * num2
}

let numero1 = 100
let numero2 = 20
let resultado = add(numero1, numero2)

let suma = function (num1, num2) {
    return num1 + num2
}

console.log(suma(numero1, numero2))

//------------------------------------ Difficulty Level: Medium ------------------------------------

function greet(name) {
    console.log(`¡Hola ${name}! Un gusto tenerte por aquí.`)
}

let nombreIngresado = "Orlando"
greet(nombreIngresado)

let multiplicar = function(num1, num2) {
    return num1 * num2
}

let entrada1 = 500
let entrada2 = 2
console.log(multiplicar(entrada1, entrada2))
entrada1 = 200
entrada2 = 3
console.log(multiplicar(entrada1, entrada2))

function calcularArea(base, altura) {
    return base*altura
}

function calcularPerimetro(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
}

function totalCompra (precio, cantidad) {
    let total = precio * cantidad
    if (cantidad >= 10 && cantidad < 20) {
        total -= (total*10/100)
    } else if ( cantidad >= 20) {
        total -= (total*20/100)
    }
    return total
}

let precio1 = 50
let cantidad1 = 3
console.log(totalCompra(precio1, cantidad1))
let precio2 = 20
let cantidad2 = 100
console.log(totalCompra(precio2, cantidad2))
let precio3 = 10
let cantidad3 = 10
console.log(totalCompra(precio3, cantidad3))

function isAnAdult(edad) {
    if (edad >= 18) {
        return "Tú eres adulto"
    } else if(edad > 0 && edad < 18) {
        return "Tú no eres adulto"
    } else {
        return "Dato ingresado no válido"
    }
}

console.log(isAnAdult(18))
console.log(isAnAdult(25))
console.log(isAnAdult(10))
console.log(isAnAdult(-10))

//------------------------------------ Difficulty Level: High ------------------------------------

function calculadorDeImpuestos(ingresosAnuales) {
    let impuestosAPagar = ``
    if (ingresosAnuales <= 10000 && ingresosAnuales > 0) {
        impuestosAPagar = `El total del impuesto es: ${ingresosAnuales*10/100}, correspondiente al 10% de sus ingresos anuales.`
    } else if (ingresosAnuales > 10000 && ingresosAnuales <= 20000) {
        impuestosAPagar = `El total del impuesto es: ${ingresosAnuales*15/100}, correspondiente al 15% de sus ingresos anuales.`
    } else if (ingresosAnuales > 20000){
        impuestosAPagar = `El total del impuesto es: ${ingresosAnuales*20/100}, correspondiente al 20% de sus ingresos anuales.`
    } else {
        impuestosAPagar = `Error - dato ingresado NO válido.`
    }
    return impuestosAPagar
}

console.log(calculadorDeImpuestos(500))
console.log(calculadorDeImpuestos(13000))
console.log(calculadorDeImpuestos(25000))
console.log(calculadorDeImpuestos(-100))

function validarDiaHabil(dia) {
    let mensaje = ""
    if (typeof dia == "number") {
        switch (dia) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                mensaje = "Este es un día hábil."
                break;
            case 6:
            case 7:
                mensaje = "Este no es un día hábil."
                break;
            default:
                mensaje = "Debe ingresar del 1 al 7."
                break;
        }
    } else {
        mensaje = `Dato no válido, ingrese un número.`
    }
    return mensaje
}

console.log(validarDiaHabil(1))
console.log(validarDiaHabil(2))
console.log(validarDiaHabil(3))
console.log(validarDiaHabil(4))
console.log(validarDiaHabil(5))
console.log(validarDiaHabil(6))
console.log(validarDiaHabil(7))
console.log(validarDiaHabil(8))
console.log(validarDiaHabil("Hola"))

function procesarDatos (nombre, apellido, edad) {
    let objeto = ""
    if (nombre == "") {
        console.error("El nombre no puede estar vacío.")
        return
    } else if (apellido == ""){
        console.error("El apellido no puede estar vacío")
        return
    } else if (edad == "" || edad < 0) {
        console.error("La edad no puede estar vacía o ser menor a 0'cero'")
        return
    } else {
        objeto = {
            nombre: nombre,
            apellido: apellido,
            edad: edad
        }
    }
    return objeto
}

let nombre = prompt("Ingrese el nombre")
let apellido = prompt("Ingrese el apellido")
let edad = +prompt("Ingrese su edad")

if (procesarDatos(nombre, apellido, edad)) {
    console.log(procesarDatos(nombre, apellido, edad))
}

function saludar(nombre) {
    return `Hola!, mi nombre es ${nombre}`
}

function calcularEdad(anioNacimiento, anioActual) {
    return anioActual - anioNacimiento
}

function present () {
    return alert(`${saludar(nombre)}, y nací en el año ${calcularEdad(anioNacimiento, anioActual)}`)
}

let nombre1 = prompt("Ingrese el nombre")
let apellido1 = prompt("Ingrese el apellido")
let anioNacimiento = +prompt("Ingrese su año de nacimiento")
let anioActual = +prompt("Ingrese el año actual")

present()