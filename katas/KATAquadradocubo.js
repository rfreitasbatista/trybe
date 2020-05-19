
function arrayMadness(a, b) {
  let aSum = 0
  let bSum = 0
    for (let i = 0; i < a.length ; i++) {
      aSum += parseInt(a[i]*a[i]) 
    }
    for (let j = 0; j < b.length ; j++) {
      bSum += (b[j]*b[j]*b[j]) 
    }
    console.log(aSum)
    console.log(bSum)
    if(aSum > bSum) {
    return true 
    } else {
    return false
    }
  }

  arrayMadness([5,6,7],[4,5,6])