// EX1
var array=['a','b','c','d','e'];
var array2=[]
for(var i= array.length-1;i>=0;i--){
   array2.push (array[i])
}
console.log(array2)

//  EX2
var arr1=[11,22,33,44,55]
for(var i=0;i<arr1.length/2;i++){
var temp=arr1[i]
arr1[i]=arr1[(arr1.length-1)-i]
arr1[(arr1.length-1)-i]=temp
}
console.log(arr1)


