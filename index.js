import files from './src/utils/fileUtils.js'
import arrays from './src/utils/transformUtils.js'
import apareo from './src/apareo.js'

// leo los 4 archivos a memoria
let setA = files.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in');
let setB = files.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in');
let impares = files.leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in');
let pares = files.leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in');

// preparo los 4 arrays a partir de los archivo leidos
const arraySetA = arrays.transformarStringEnArrayDeNumeros(setA, ',')
const arraySetB = arrays.transformarStringEnArrayDeNumeros(setB, ',')
const arrayimpares = arrays.transformarStringEnArrayDeNumeros(impares, ',')
const arrayPares = arrays.transformarStringEnArrayDeNumeros(pares, ',')

// combino los primeros dos arrays
const arrayCombinado = apareo.combinarDosArrays(arraySetA, arraySetB)
console.log(arrayCombinado)

// combino los cuatro arrays
const arrayDeArrays = apareo.combinarNArrays([arraySetA, arraySetB, arrayimpares, arrayPares])
console.log(arrayDeArrays)



//test de funciones.
/*
 
console.log(files.leerArchivoComoString('./in/datos.txt'));
files.escribirTextoEnArchivo('./in/datos.txt', '1,2,3,4', false);


const array = arrays.transformarStringEnArrayDeNumeros('1,2,3,4,*,5', ',')
console.log(array)
//prueba de funcion
//const arrayA = [1,2,3,4,5,6]
//const arrayB = [7,8,9,6,10]
const arrayC = [[1,2,3],[4,5,3],[6,2,7,8]]
//console.log(arrayA)
//console.log(arrayB)
//console.log(apareo.combinarDosArrays(arrayA, arrayB))

console.log(apareo.combinarNArrays(arrayC))

var a = arrays.transformarArrayDeNumerosAUnSoloString(array, ',')
console.log(a)
//console.log(array)


console.log(arraySetA)
console.log(arraySetB)
console.log(arrayimpares)
console.log(arrayPares)
*/


