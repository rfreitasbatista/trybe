let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*loop para testar item a item do array numbers*/
for (let i = 1; i < numbers.length; i++) {

  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];
  
      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log(numbers);

let multi =[]
for( k = 0 ; k < numbers.length ; k++ ) {
  if(numbers[k+1]!== undefined){
  let impossible=(numbers[k]*numbers[k+1]);
  multi.push(impossible);
}
else {
  multi.push(numbers[k]*2);
}
}

console.log(multi);