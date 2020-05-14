let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior=[];
for (let i=0; i<numbers.length;i++){
   if (numbers[i]%2!==0) {
     maior.push(numbers[i]);
   }
}
console.log(maior.length);