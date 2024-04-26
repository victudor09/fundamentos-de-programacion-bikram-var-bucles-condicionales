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

//13
let variableValorNumerico = 1

//14
const MiNombre = "Victor"

//15
const MiNumeroFav = 8

//Booleanos

//16

const booleanoOr = booleano1 || booleano2

//17
const booleanoMix1 = (booleano1 && (TAU/2 == PI)) || (variableValorNumerico >= MiNumeroFav)

//18
const seisNoEsNueve =  6!==9 

//19
const booleanoMix2 = (variableValorNumerico > 0) || variableValorNumerico < (MiNumeroFav * TAU)

//20
let valorSuma = MiNumeroFav + variableValorNumerico

//21
let valorResta = MiNumeroFav - variableValorNumerico

//22
let valorMultiplicacion = (MiNumeroFav * variableValorNumerico)

//23
let valorDivision = MiNumeroFav/3

//24

let contarHasta10 = 0

while (contarHasta10 !== 10) {
    contarHasta10++
    //console.log(contarHasta10)
}

//25
let preI = 0
let preJ = 0

for (let i = 0; i < 11; i++) {
    ++preJ
    preI = preI + preJ
}

//26
let sumaImpares = 0 

for (let i = 0; i < 10; i++) {
    
    if (i % 2 != 0) {
        sumaImpares = sumaImpares + i
        }
}