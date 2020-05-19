let nome = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function maiorValor(names) {
  let bigger = ''
  
  for (var i = 0 ; i < names.length ; i += 1 ) {
    
    if ( names[i].length > bigger.length) {
      bigger = names[i]
    }
  }
  console.log(bigger);

}


maiorValor(nome);


