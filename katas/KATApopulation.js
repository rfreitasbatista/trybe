function nbYear(p0, percent, aug, p) {
  let pAno = p0 + (p0*percent/100) +aug
  console.log(p0)
  
  let contador = 1
      for( let i = 0; i <=1000 ; i += 1) {
        if (pAno < p) {
          pAno = pAno + (pAno*percent/100 + aug)
          contador += 1
        } else {
          return contador
        }       
      }
    
   }
 console.log(nbYear(1500000, 2.5, 10000, 2000000))