/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
    return str.split(separador).reduce((numeros, parte) => {
        const numero = parseFloat(parte);
        if (!isNaN(numero)) {
            numeros.push(numero);
        }
        return numeros;
    }, []);
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    var str = arr.join(separador)
    return str
}

// exportar ambas funciones
export default{
    transformarArrayDeNumerosAUnSoloString,
    transformarStringEnArrayDeNumeros,
}