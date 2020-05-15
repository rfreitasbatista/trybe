
let nota = 70;
let notaFinal;

if (nota >= 90) {
  notaFinal = "A";
}
else if (nota < 90 && nota >= 80) {
  notaFinal = "B";
}
else if (nota < 80 && nota >= 70) {
  notaFinal = "C";
}
else if (nota < 70 && nota >= 60) {
  notaFinal = "D";
}
else if (nota < 60 && nota >= 50) {
  notaFinal = "E";
} 
else {
  notaFinal = "F";
}


console.log(notaFinal);