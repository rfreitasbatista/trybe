let valores = {
 I: "1",    
 IV: "4",  
 V: "5",
 IX: "9",
 X: "10",
 XL: "40",
 L: "50",
 XC: "90",
 C: "100",
 CD: "400",
 D: "500",
 CM: "900",
 M: "1000",
}

function nROmanos (romanos) {
let soma = 0;
  for(i = 0; i < romanos.length; i++)
   if(romanos[i] in valores) {
     if(romanos[i]==="V" && romanos[i-1]==="I") {
       soma = parseInt(soma) + parseInt(valores[romanos[i]]) - 2
     } else 
     if (romanos[i]==="X" && romanos[i-1]==="I") {
      soma = parseInt(soma) + parseInt(valores[romanos[i]]) - 2
     }else 
     if (romanos[i]==="L" && romanos[i-1]==="X") {
      soma = parseInt(soma) + parseInt(valores[romanos[i]]) - 20
     }else 
     if(romanos[i]==="C" && romanos[i-1]==="X") {
      soma = parseInt(soma) + parseInt(valores[romanos[i]]) - 20
     }else 
     if(romanos[i]==="D" && romanos[i-1]==="C") {
      soma = parseInt(soma) + parseInt(valores[romanos[i]]) - 200
     }else 
     if(romanos[i]==="M" && romanos[i-1]==="C") {
      soma =  parseInt(soma) + parseInt(valores[romanos[i]]) - 200
     } else {
       soma = parseInt(soma) + parseInt(valores[romanos[i]])
     }
   }
return soma
}

console.log(nROmanos("CML".toUpperCase()))