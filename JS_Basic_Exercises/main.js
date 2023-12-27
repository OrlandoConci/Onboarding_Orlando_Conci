console.log("Starting javascript...")

// -------------------------- Difficulty Level: Low --------------------------

//----- (1) (2) (3) (4) (5) (6) (7) ------

let myName = "Orlando"
console.log(myName)

let myLastName = "Conci"

let myAge = 22

let myPet = "Andy"

let petAge = 6

let fullName = `${myName} ${myLastName}`

let presentationText = `Hola! Mi nombre es ${fullName}, tengo ${myAge} años y tengo una mascota llamada ${myPet} de ${petAge} años.`
console.log(presentationText)

// -------------------------- Difficulty Level: Medium --------------------------

//----- (1)------

let sumAges = myAge + petAge
let subtractAges = myAge - petAge
let productAges = myAge * petAge
let divisionAges  = myAge / petAge

//----- (2)------

let student = {
    name: "Ricardo",
    lastName: "Rivera",
    age: 35,
    regular: true,
    legajo: 84646
}

console.table(student)

console.log(`Nombre: ${student.name}.`)
console.log(`Apellido: ${student.lastName}.`)
console.log(`Edad: ${student.age} años.`)
console.log(`Regular: ${student.regular}.`)
console.log(`Legajo: ${student.legajo}.`)

//----- (3)------

let pet = {
    name: "Andy",
    color: "Naranja",
    age: 6,
    weight: 5,
    stains: false
}

console.table(pet)

console.log(`Nombre: ${pet.name}.`)
console.log(`Color: ${pet.color}.`)
console.log(`Edad: ${pet.age} años.`)
console.log(`Peso: ${pet.weight} kg.`)
console.log(`Manchas: ${pet.stains}.`)

//----- (4)------

let fruits = ["peras", "manzanas", "uvas", "duraznos", "mandarinas"]

console.log(fruits)

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])

// -------------------------- Difficulty Level: High --------------------------

//----- (1)------

let edadIngresda = Number(prompt("Ingrese su edad"))
let IamAdult = edadIngresda >= 18

console.log(`Soy un adulto: ${IamAdult}`)

//----- (2)------

let numbers = [321, 456, 987, 537, 159]

console.log(numbers)

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])

//----- (3)------

let family = [
    {nombre: "Pedro", miembro: "Padre"},
    {nombre: "Marcela", edad: 45},
    {nombre: "Liliana", convive: true},
    {nombre: "Hernesto", casado: false},
    {nombre: "Mariela", miembro: "Hija mayor"}
]

console.log(family)

console.log(family[0])
console.log(family[1])
console.log(family[2])
console.log(family[3])
console.log(family[4])

//----- (4)------

let randomText = `${family[4].nombre} tiene a la venta ${numbers[3]} ${fruits[1]}.`
console.log(randomText)

// -------------------------- Fin --------------------------
