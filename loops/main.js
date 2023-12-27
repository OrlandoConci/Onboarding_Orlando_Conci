console.log("Starting Javascript...")

// --------------------------------- Difficulty Level: Low ---------------------------------

//----- (1)------

function validarDesdeHasta(inicial, final) {
    let primeraVuelta = true;
    let ingresado = ""
    do {
        if (primeraVuelta == true) {
            ingresado = +prompt(`Ingrese un número del ${inicial} al ${final}`)
            primeraVuelta = false
        } else {
            ingresado = +prompt(`Error - Ingrese un número del ${inicial} al ${final}`)
        }
    } while(ingresado < inicial || ingresado > final)
    return ingresado
}

let ingresado = validarDesdeHasta(1, 100)
for (let i = ingresado; i >= 0; i--) {
    console.log(i)
}

//----- (2)------

function tablaDeMultiplicar(base) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${base} x ${i} = ${base*i}.`)
    }
}

let numeroMultiplicar = validarDesdeHasta(1, 10)

tablaDeMultiplicar(numeroMultiplicar)

//----- (3)------

function acumuladorWhile() {
    let acumulador = 0
    let num = -1
    while (num !== 0) {
        num = +(prompt("Ingrese un número para acumular:"))
        acumulador += num
    }
    return acumulador
}

let acumuladoEjercicio3 = acumuladorWhile()
console.log(`El valor acumulado en el while es: ${acumuladoEjercicio3}`)

//----- (4)------

function acumuladorDoWhile() {
    let num = ""
    let acumulador = 0

    do {
        num = +prompt("Ingrese un número a acumular")
        acumulador += num
    } while (num !== 0)

    return acumulador
}

console.log(`El valor acumulado es: ${acumuladorDoWhile()}.`)

//----- (5)------

function recorrerObjeto(objeto) {
    for (key in objeto) {
        console.log(key)
    }
}

let persona = {
    name: "Ricardo",
    lastName: "Perez",
    origin: "main",
    studies: true
}

recorrerObjeto(persona)

//----- (6)------

function recorrerValoresObjeto(objeto) {
    for (key in objeto) {
        console.log(objeto[key])
    }
}

recorrerValoresObjeto(persona)

// --------------------------------- Difficulty Level: Medium ---------------------------------

//----- (1)------

function ingresarHastaIgualar(acumulado) {
    let contador = 0
    let num = +prompt("Ingrese un número")
    contador += 1
    while (num != acumulado) {
        if (num > acumulado){
            console.log("El número ingresado es mayor al acumulado.")
        } else {
            console.log("El número ingresado es menor al acumulado.")
        }
        
        num = +prompt("Ingrese otro número")
        contador += 1
    }
    alert(`Tú adivinaste! El número secreto era ${acumulado} y lo hiciste en ${contador} intentos.`)
}

ingresarHastaIgualar(acumuladoEjercicio3)

//----- (2)------

function divisores(numero) {
    for (let i=0; i<= numero; i++) {
        if (numero%i == 0) {
            console.log(`${numero} / ${i}`)
        }
    }
}

divisores(50)

//----- (3)------

function RingBell() {

    return "Ding Dong"

}

function replicarStrings() {
    let concatenado = []
    let cant = +prompt("Ingrese la cantidad de veces que se debe repetir el string")
    while (cant <= 0) {
        cant = +prompt("Ingrese la cantidad de veces que se debe repetir el string")
    }
    for (let i=0; i< cant; i++) {
        concatenado.push(RingBell())
    }
    return concatenado.join(", ")
}

console.log(replicarStrings())

//----- (4)------

const dateLimit = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

function compararFechas(dateLimit, dates) {
    for (date of dates) {
        if (date >= dateLimit) {
            console.log(date)
        }
    }
}

compararFechas(dateLimit, dates)

//----- (5)------ && ------ (6) ------

function listColor(colores) {
    for (color of colores) {
        console.log(color)
    }
}

let color = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"]
listColor(color)

//----- (7) -----

function duplicarNumeros(numeros) {
    for (numero of numeros) {
        console.log(`El número es: ${numero} y el doble: ${numero * 2}`)
    }
}

let numeroDobles = [15, 6, 7, 8, 1]
duplicarNumeros(numeroDobles)

//----- (8) -----

let objetosFamilia = [
    {name: "Pedro", roll: "Padre", edad: 35, pasatiempo: "salir a correr"},
    {name: "Miranda", roll: "Madre", edad: 36, pasatiempo: "Ver novelas"},
    {name: "Claudio", roll: "Hijo", edad: 15, pasatiempo: "jugar a la play"},
    {name: "Sofía", roll: "Hija", edad: 19, pasatiempo: "escuchar Música"},
]

function presentarFamilia(familia) {
    for (miembro of familia) {
        console.log(`Hola, yo soy ${miembro.name} y tengo ${miembro.edad} años. Soy el/la ${miembro.roll} de la familia, y me gusta ${miembro.pasatiempo}.`)
    }
}

presentarFamilia(objetosFamilia)

// --------------------------------- Difficulty Level: High ---------------------------------

//----- (1) ------

function sumarParesImpares() {
    let pares = 0
    let impares = 0
    let numero = -1
    do {
        numero = +prompt("Ingrese un número para ser sumado")
        if (numero%2== 0) {
            pares += numero
        } else {
            impares += numero
        }
    } while (numero !== 0)
    return [pares, impares]
}

[sumaPares, sumaImpares] = sumarParesImpares()
console.log(`El total de los pares es: ${sumaPares}, y la suma de los impares es: ${sumaImpares}`)

//----- (2) -----

function mayorArray(arrayNumeros) {
    let mayor = ""
    for (let i=0; i<=arrayNumeros.length-1;i++) {
        if (mayor == "") {
            mayor = arrayNumeros[i]
        } else if(arrayNumeros[i] > mayor) {
            mayor = arrayNumeros[i]
        }
    }
    return mayor
}

listaNumeros = [35, 12, 78, 21, 69, 48, 45, 75]
alert(mayorArray(listaNumeros))

//--------------------------------- Fin ---------------------------------
