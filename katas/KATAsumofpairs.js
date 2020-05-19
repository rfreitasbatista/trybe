var sum_pairs=function(ints, s){
  let sum1 = [];
  let inumber = 0
  let jnumber = 0
  for (let i = 0; i < ints.length; i += 1) {
    
    for(let j =0; j< ints.length; j += 1) {
      if((ints[i]+ints[j]) === s && i !== j) {
        
        if(inumber >= i && jnumber >= j) {
        inumber = i
        jnumber = j
        sum1.push(ints[i]);
        sum1.push(ints[j]);
        }
      }
    }
  }
 
  console.log(sum1)
}

sum_pairs([10, 5, 2, 3, 7, 5], 10)