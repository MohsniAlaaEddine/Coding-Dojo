// we need a loop because it's a repetetion 
var candy = 0 

for (var i=1;i<=6;i++) {           // the starting point is 1 miles and the loop should stop at 6 miles
if (i % 2 ==0 ) {     //  if the runner attempt 2 kilometer he receive a candy 
    candy += 1
}
}    
console.log (candy) //3

// the optional loop I named the candy a Bonbon 
var speed =5.6
var Bonbon = 0
for (var i=1;i<=6;i++) {           // the starting point is 1 miles and the loop should stop at 6 miles
    if (i % 2 ==0 && speed > 5.5) {     // if the runner attempt 2 kilometer he receive a candy 
        Bonbon += 1
    }
    }    
    
console.log (Bonbon) // 3