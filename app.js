import { wordExist } from './js/ex3.js';

// Definir la frase y la palabra
const sentence = "abcEnglishdef";
const word = "English";


// Llamar a la función y pasar los parámetros
function checkWordExistence() {
    console.log(wordExist(sentence, word));//true
    console.log(wordExist(sentence,"eNglisH"));//false
    console.log(wordExist( "abcnEglishsef", word));//false
    console.log(wordExist(sentence.toLowerCase(), word.toLowerCase("eNglisH")));//true
}

// Llamar a la función
checkWordExistence(); 






