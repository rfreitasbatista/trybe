function number(numero){ 
var unidade = numero%10
var decimo= (Math.floor(numero/10))%10
var centesimo = (Math.floor(numero/100)) % 10

let unidade2 = unidade*unidade
let decimo2 = decimo*decimo
let centesimo2=centesimo*centesimo

var primeiro= centesimo2.toString()
var segundo= decimo2.toString()
var terceiro= unidade2.toString()

var juntos = primeiro + segundo + terceiro
var final= parseInt(juntos, 10);

return final

}
number(355)