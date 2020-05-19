function sortReindeer(reindeerNames) {
  arrSize=reindeerNames.length;
var temp;
for(j = 0 ; j < arrSize-1 ; j++){
    for(i = 0 ; i < arrSize-1 ; i++){
        if (reindeerNames[i].split(' ')[1] < reindeerNames[i+1].split(' ')[1]){
            temp = reindeerNames[i+1];
            reindeerNames[i+1] = reindeerNames[i];
            reindeerNames[i] = temp;
            }
        }
    }
    return reindeerNames.reverse();
}

console.log(sortReindeer([
  "Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
  "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
]))