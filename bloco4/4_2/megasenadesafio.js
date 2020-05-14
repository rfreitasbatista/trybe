/*FUNÇÃO QUE GERA NÚMERO ALEATÓRIOS*/
function retornaNumeroEntreUmESessenta() {
  return Math.ceil(Math.random() * 60);
}
/*LOOP QUE INSERE O NÚMERO ALEATÓRIO GERADO DENTRO DO ARRAY megaSenaNumbers*/
let megaSenaNumbers = [];
for (let i = 0; i < 6; i+=1) {
  megaSenaNumbers[i] = retornaNumeroEntreUmESessenta();
}
/*JOGOS FEITOS EM AULA*/
let firstPlay = [7, 15, 17, 20, 31, 35];
let secondPlay = [1, 2, 3, 4, 5, 6];
let thirdPlay = [60, 59, 58, 57, 56, 55, 54];

/*ARRAY QUE CONTERÁ TODOS OS JOGOS FEITOS*/
let plays = [firstPlay, secondPlay, thirdPlay];
/*VARIÁVEL QUE INDICA QUANTOS ACERTOS TIVEMOS EM CADA JOGO (POR ENQUANTO ZERADA)*/
let numberOfHits = [0, 0, 0];
/*TESTE PARA CADA INDICE DO PLAY (QUE SAO 3, LOGO TRES TESTES SE INICIARÃO)*/
for(let j = 0; j < plays.length; j+=1) {
  /*TESTE PARA CADA NÚMERO DENTRO DO ARRAY megaSenaNumbers (6 testes)*/
  for (let i = 0; i < megaSenaNumbers.length; i = i + 1) {
    /*TESTE PARA CADA NÚMERO DENTRO DE CADA NUMERO DENTRO DOS INDICES DO plays (uns tem 6 e o ultimo 7)*/
    for (let n = 0; n < plays[j].length; n += 1) {
      /*CONDIÇÃO PARA SER ADICIONADO UM NUMERO NO numberOfHits*/
      if (megaSenaNumbers[i] === plays[j][n]) {
        numberOfHits[j] += 1;
      }
    }
  }
}



console.log(megaSenaNumbers);

console.log(plays);

console.log(numberOfHits);
