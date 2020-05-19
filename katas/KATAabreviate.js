function abbrevName(name){

  let initials = name.split(" ")
  let answer = '';
  
    let firstInitials = initials[0].toUpperCase()
    let finalInitials = initials[1].toUpperCase()
    answer = firstInitials[0] + "." + finalInitials[0]

  return answer
    
 }

 console.log(abbrevName("Rodrigo Freitas"))