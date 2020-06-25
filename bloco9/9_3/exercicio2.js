const elevados = new Promise((resolve, reject) => {
    let numbers = []
    for(i = 0; i < 10; i += 1) { 
      let makeNumber = ((Math.random()*50).toFixed(0))
      numbers.push((makeNumber*makeNumber)) 
    }
    const soma = numbers.reduce((total, number) => total += number);
    if(soma < 8000) {
      resolve(soma);
    }
    reject()
  })

const arrResult = []

elevados.then ( message => { 
  const arrDivision = []
  arrDivision.push(message/2)
  arrDivision.push(message/3)
  arrDivision.push(message/5)
  arrDivision.push(message/10)
  console.log(arrDivision)
  return arrDivision
})
.then( data => {
 console.log(data.reduce((total, number) => total+= number))})
.catch( error => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))