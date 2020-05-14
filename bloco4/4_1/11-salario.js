let salarioBruto = 8000
let descontoINSS
let descontoIR

if (salarioBruto <= 1556.94) {
  descontoINSS=salarioBruto*0.08
} 
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  descontoINSS=salarioBruto*0.09
}  
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  descontoINSS=salarioBruto * 0.11
}  
else {
  descontoINSS=570.88
}

let salarioBase=salarioBruto-descontoINSS

if (salarioBase <= 1903.98) {
  descontoIR=0
} 
else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  descontoIR=salarioBase * 0.075 - 142.80
}  
else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  descontoIR=salarioBase * 0.15 - 354.80
}  
else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  descontoIR=salarioBase * 0.225 - 636.13;
}
else {
  descontoIR=salarioBase * 0.275 - 869.36;
}

console.log("Salário Bruto: R$" + salarioBruto);
console.log("Desconto INSS: R$" + descontoINSS);
console.log("Salário Base: R$" + salarioBase);
console.log("Desconto IR: R$" + descontoIR);
console.log("Salário líquido: R$" + (salarioBase-descontoIR));