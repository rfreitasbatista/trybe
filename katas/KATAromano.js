function conversor() { 

  this.toRoman = function(number){
    if(number > 0 ) {
      let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
      let romanized = "";
      for(let i =0; i < decimalValue.length; i += 1) {
        while(decimalValue[i] <= number) {
          romanized += romanNumeral[i];
          number-= decimalValue[i];
        }
      }
      return romanized
      } 
  }

  this.fromRoman = function(number) {
  
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
    let soma = 0;
      for(i = 0; i < number.length; i++)
       if(number[i] in valores) {
         if(number[i]==="V" && number[i-1]==="I") {
           soma = parseInt(soma) + parseInt(valores[number[i]]) - 2
         } else 
         if (number[i]==="X" && number[i-1]==="I") {
          soma = parseInt(soma) + parseInt(valores[number[i]]) - 2
         }else 
         if (number[i]==="L" && number[i-1]==="X") {
          soma = parseInt(soma) + parseInt(valores[number[i]]) - 20
         }else 
         if(number[i]==="C" && number[i-1]==="X") {
          soma = parseInt(soma) + parseInt(valores[number[i]]) - 20
         }else 
         if(number[i]==="D" && number[i-1]==="C") {
          soma = parseInt(soma) + parseInt(valores[number[i]]) - 200
         }else 
         if(number[i]==="M" && number[i-1]==="C") {
          soma =  parseInt(soma) + parseInt(valores[number[i]]) - 200
         } else {
           soma = parseInt(soma) + parseInt(valores[number[i]])
         }
       }
    return soma
    }
    }

let RomanNumerals = new conversor();


console.log(RomanNumerals)