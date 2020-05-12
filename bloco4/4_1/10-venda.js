let custo = 35;
let venda = 70;

if (custo < 0 || venda < 0) {
  console.log ("Entre um valor adequado maior ou igual a ZERO")
} else {

let custoReal = custo*1.8
let lucro = venda - custoReal
let unidadesVendidas=1000
let receita = lucro*unidadesVendidas

if (lucro >= 0) {
  console.log("Lucro de R$" + receita);
} 
else {
console.log("Prejuízo de R$" + receita);
}

}