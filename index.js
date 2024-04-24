//Declarando variables
let variableSinValor = undefined

let booleano1 = false
let booleano2 = true

const PI = 3.14
const TAU = 2*PI


//Booleanos

const booleanoAnd = booleano1 == booleano2

const booleanoNot = !booleano1

const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))

let incrementarDesp = 2 
let resultadoDesp = incrementarDesp++

let incrementarAntes = 2
let resultadoAntes = 0
resultadoAntes = ++incrementarAntes


//Bucles

let contarHasta10_2 = 0

while (contarHasta10_2 < 10) {
contarHasta10_2++
}


let postI = 0
let postJ = 0

for (let i = 0; i < 11; i++) {
    postI = postI + postJ
    postJ++
}


let sumaPares = 0

for (let i = 0; i < 10; i++) {
    
    if (i % 2 == 0) {
        sumaPares = sumaPares + i
        console.log = sumaPares
        }
    }