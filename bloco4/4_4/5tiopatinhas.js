let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on bear Mountain",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};
  
for(chave in info){
  if (chave !== "recorrente") {
console.log( info[chave] + " e " + info2[chave])
} else {
  console.log("Ambos são sim");
}
};
