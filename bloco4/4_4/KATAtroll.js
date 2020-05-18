function disemvowel(str) {
  let vogal = {
    a:0,
    e:0, 
    i:0,
    o:0, 
    u:0,
    A:0,
    E:0,
    I:0,
    O:0,
    U:0
  }
  let fraseNova = []
  let vogalmerda = []

    for(let i = 0 ; i < str.length ; i += 1) {

      if( str[i] in vogal) {
        vogalmerda.push(str[i])
      } else {
        fraseNova.push(str[i])
      }

    }
  let fraseFinal = fraseNova.join("")
  console.log(fraseNova)
  console.log(fraseFinal)
  console.log(vogalmerda)
  
  return fraseFinal;
  }

  disemvowel("Rodrigo freitas batista")