function calculaFatorial(num) {      //Função que calcula o fatorial de qualquer número
  let fatorial = num;                //Guarda o valor recebido pela função
  for (let i = 1; i < num; i++) {    //Laço para a execução do fatorial
    fatorial = fatorial * (num - i);
  }
  return fatorial;   
}

console.log(calculaFatorial(1));     //Chama a função calculaFatorial