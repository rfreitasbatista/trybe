function points(games) {
  let points = 0
   for( i=0 ; i < games.length ; i++) {
     let gameXY = games[i];
   
         if( gameXY[0] > gameXY[2] ) {
         points += 3
       } else if ( gameXY[0] === gameXY[2] ) {
         points +=1
       } else {
        points +=0 }
   
   }
   return points;
    // your code here
  }

  console.log(points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']))