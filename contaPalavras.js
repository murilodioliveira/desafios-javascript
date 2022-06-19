// ##### Contador de Palavras #####
/* Esse desafio tem por objetivo contar quantas palavras se repetemem cada frase. */

var contagem = {};

function contaPalavras(string){
    let arrumaFrase = string.replace(/\W/gm, " "); // Substitui todas as pontuações e acentuações
    let tokens = arrumaFrase.split(/\s+/gm);
    if (tokens[tokens.length - 1] == "") {
        tokens.pop();        
    }
    console.log(tokens);
    for (let i = 0; i < tokens.length; i++) {
        var palavra = tokens[i].toLowerCase();
        if (contagem[palavra] === undefined){
            contagem[palavra] = 1;
        } else {
            contagem[palavra] = contagem[palavra] + 1;
        }
        
    }
}

let frase = "JavaScript (ou 'JS') e uma linguagem de programaçao utilizada principalmente para scripts dinamicos do lado do cliente em paginas web, podendo tambem ser utilizada no lado do servidor, usando um interpretador (em ingles: runtime) como o Node.js.";

contaPalavras(frase);

console.table(contagem);