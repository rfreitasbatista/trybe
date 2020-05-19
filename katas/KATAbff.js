function friend(friends){
  let bff = [];
  for( let i = 0 ; i < friends.length ; i += 1) {
    let colega = friends[i]
    if(colega.length === 4) {
    bff.push(colega);
    }
 }
return bff;
}

console.log(friend(["Ryan", "Kieran", "Mark"]))