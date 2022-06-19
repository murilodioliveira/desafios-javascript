// ##### Contador de Palavras #####
/* Esse desafio tem por objetivo contar quantas palavras se repetemem cada frase. */

function contaPalavras(string){
    let arrumaFrase = string.replace(/\W/gm, " "); // Substitui todas as pontuações e acentuações
    let fraseSeparada = arrumaFrase.split(/\s+/gm);
    if (fraseSeparada[fraseSeparada.length - 1] == "") {
        fraseSeparada.pop();        
    }
    console.log(fraseSeparada);
    console.log(fraseSeparada.length);
}

let frase = "Ao surgir, a! manha!";

contaPalavras(frase);