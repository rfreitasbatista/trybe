
let arr = [1, 2, 3, 4, 6, 7, 8]


for (let i = arr.length -1 ; i >= 0  ; i-- ) {
  
  if ( (arr[i] -1) !== arr[i-1] && i !== 0 ) {
    sequenceStop = arr[i];
    console.log(sequenceStop);
 }
}