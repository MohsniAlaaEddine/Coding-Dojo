var coutposistive = 0
var number = [3,4,-2,7,16,-8,0]
for (var i=0;i<=number.length-1;i++){
    if (number[i]>=0){
        coutposistive++ 
    }
}
console.log("there are "+coutposistive+" positive values")
