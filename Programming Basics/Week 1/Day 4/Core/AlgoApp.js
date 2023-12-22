//---------------Level 1 ---------------------
//Activity1
var x=5;
console.log(x);

//Activity2
var x=3;
x=x+1;
console.log(x);

//Activity3
var x=3;
x=x+2;
console.log(x+2);
console.log(x);

//Activity4
var x=3;
x=x*x;
console.log(x);
console.log(x*2);

//Activity5
var x=2;
var y=5;
var z=x+y;
console.log(z);

//---------------Level 2 ---------------------

//activity1
var x=[1,2,4];
console.log(x);
//activity2
var x =[1,3,5];
console.log(x[0]);
//activity3
var x =[2,4,6];
console.log(x[1]);
//activity4
var x =[1,3,5];
console.log(x[2]);
//activity5
var x =[1.3];
console.log(x[0]);
//activity6
var x =[1,2,4];
x[0]=x[1];
console.log(x);
//activity7
var x =[1,3,5];
var y=x.length;
console.log(y);
//activity8
var x =[2,4,6,3,7];
var y=x.length-2;
console.log(x[y]);
//activity9
var x =[2,4,6,3,7];
var y=x.length;
console.log(x[y-1]);
//activity10
var x =[1,3,5,7];
x[0] = x[x.length-2];
console.log(x);
//challenge11
var x =[1,3,5,7];
x[x.length-3] = x[x.length/2+x.length/4];
console.log(x);
//activity12
var x =[1,3,5,7];
var y=[2,4,6];
x[2]=y[x.length-3];
console.log(x);
//activity13
var x =[1,3,5,7];
var y=[2,4,6];
x[2]=y[x.length-3]+x[x[0]+y[0]];
console.log(x);

//------------Level 3-------------------

//activity1
var x =[1,3,5];
x[0]=x[2];
x[1]=x[0];
console.log(x)
//activity2
var x =[1,3,5];
var y =[0,5,7];

x[0]=x[1]+y[2];
y[1]=y[2]-x[0];
console.log(x)
//activity3
var x=[1,3,5,8];
x[0]=x[x.length-1];
console.log(x);
//activity4
var x =[1,3,5,8];
var temp=x[x.length-1];
x[x.length-1]=x[0];
console.log(x);
//activity5
var x =[1,3,5,8];
var temp=x[x.length-1];
x[x.length-1]=x[0];
x[0]=temp;
console.log(x);
//activity6
var x=[1,3,5,8];
x.pop();
x.push(7);
console.log(x);
//activity7
var x=[1,3,5];
x[0]=15;
x[3]=77;
console.log(x);
//activity8
var x=[1,3,5,8,2,-5,-8];
x[0]=x[x.length-1];
x[x.length-1]=x[0];
console.log(x);
//activity9
var x=[1,3,5,8,2,-5,-8];
var temp = x[x.length-1];
x[x.length-1]=x[0];
x[0]=temp;
console.log(x);
//activity10
var x= [1,3,5];
x.push(7);
console.log(x);
//activity11
var x= [2,4,6];
x.push(3);
console.log(x);
//activity12
var x= [1,3,5];
var y=x[0]+x[1];
x.push(y);
console.log(x);
//activity13
var x= [2,3,5];
x.push(x[0]+x[1]);
console.log(x);
//activity14
var x= [1,3,5];
x.pop();
console.log(x);
//activity15
var x= [1,3,5];
x.push(2);
x.pop();
console.log(x);

//--------Level_4-----------
//activity1
var counter=1;
if (counter==1) {
    console.log('hello');
}
//activity2
var counter=1;
if (counter==1){
    console.log ('hello');
}
else if (counter==2){
    console.log('world');
}
//activity3
var counter =2;
if (counter<10) {
    console.log ("less than 10");
}
else {
    console.log("greater than or equal to 10");
}
//activity4
var counter =1;
if (counter==5) {
    console.log ("coding ");
}
else {
    console.log("dojo");
}
//activity5
var x=[2,4,5] 
var counter=0;
if (x [counter]<5){
    console.log ("coding ");
}
else {
    console.log ("dojo");
}
//activity6 
var x=[2,4,5];
var counter=2;
if (x[counter]>10)
{
    console.log('coding');
}
else{
    console.log('dojo');
}
//activity7 
var x=[2,4,5];
var counter =0;
if (x[counter]>0){
    console.log('coding');
    counter=counter+1;
}
console.log(x[counter]);
//activity8
var x=[2,4,5];
var counter =0;
if (x[counter]>0){
    console.log('coding');
    counter=counter+1;
}
if (x[counter]>0){
    console.log('coding');
    counter=counter+1;
}if (x[counter]>0){
    console.log('coding');
    counter=counter+1;
}
console.log(x);
console.log(counter);
//-----------Level_5----------
//activity1
for (var i=0;i<10;i++){
    console.log(i)
}
//activity2
var x=1;
for (var i=0;i<3;i++)
{
    x=x+1;
}
console.log(x);
//activity3
var x=1;
for ( var i=0;i<3;i=i+2){
    x=x+1;
}
console.log(x);
console.log(i);
//activity4
var x=1;
for (var i=0;i<-1;i=i+2)
{
    x=x+1;
}
console.log(x)
//activity5 
var x=[];
for (var i=0;i<10;i++)
{
    x.push(i*2);
}
console.log(x);
//activity6
var x=[1,3,5,8];
for (var i=0;i<x.length;i++)
{
    if(x[i]>4){
        x[i]=0
    }
}
console.log(x);
//activity7
var x=[-1,3,2,7];
for (var i=0;i<x.length;i++){
    if (x[i]<i){
        x[i]=-10;
    }
}
console.log(x);
//activity8 
for (var i=20;i!=10;i--){
    console.log(i);
}
//activity9
var x=0;
for(var i=1;i<4;i++)
{
    x=x+i;
    console.log(x);
    console.log(i);
}
//activity10
var x=0;
for (var i=1;i<4;i=i+2){
    x=x+i;
    console.log(x);
    console.log(i);
}

//-----------LEVEL 6--------
// Activity1
function a()
{
    console.log(5)
}
a();
//Activity2
function a()
{
    console.log(55)
}
//activity3
a();
function a()
{
    console.log(25)
}
//activity4
function a()
{
    var b=25;
    b=b+10;
    console.log(b)
}
a();
//activity5
function a(b,c)
{
    console.log(b)
    console.log(c)

}
a(3,5);
//activity6
function a(b,c)
{
  return b+c;
}
console.log(a(3,5));
//activity7
function a(b,c)
{
  return b*c;
}
console.log(a(3,5));
//activity8
function a(b,c)
{
  return b*3-c;
}
console.log(a(3,2));
console.log(a(1,1));
//activity9
function a(b,c)
{
  return b+c;
}
console.log(a(1,1)+a(2,2));
//activity10
function a(b,c)
{
  return b+c;
}
console.log(a(1,a(2,3)));
//activity11
function a(b,c)
{
  return b+c;
}
console.log(a(a(1,2),a(2,3)));
//activity12
function a(b,c)
{
  return b+c;
}
console.log(a(a(1,2),a(2,a(1,2))));
//activity13
function a(b,c)
{
    console.log(b);
  return b+c;
}
console.log(a(3,2));
//activity14
function a(b,c)
{
    console.log(c);
  return b-c;
}
console.log(a(3,2));
//activity 15
function a(){
    return 25;
    return 50;
}
console.log(a());
//activity16
function a(b,c){
    return 25;
    return b+c;
}
console.log(a(3,2));
//activity17
function a(b,c)
{
  return b+c;
}
console.log(a(a(2,3),a(1,1)));
//activity 18
function a (b,c)
{
    return 0;
}
console.log(a(a(2,3),a(1,1)));
//---------Level 7----------------
//activity1
for (var i=1;i<100;i++){
    if (i==10)
    {break;}
    console.log(i);
}
//activity2
for (var i=13;i<=20;i++)
{
    if (i==50){break;}
    console.log(i);
}
//activity3
for (var i=1;i<=20;i++)
{
    if (i>5){break;}
    else{console.log('hello');}
}
//activity4
for (var i=9;i<=20;i++)
{
    if (i==10){break;}
    else{console.log('hello');}
    console.log(i);
}
//activity5
var message='CodingDojo';
for (var i=5;i<=20;i++)
{
    if (i==message.length){
        break;
    }

console.log(i);
}

//----------Level_8----------
//activity1
for(var num1=1;num1<=3;num1++){
    for (var num2=1;num2<=2;num2++)
    {
        console.log('Dojo');
    }
}
//activity2
for(var num1=0;num1<=3;num1++){
    for (var num2=0;num2<=2;num2++)
    {
        if(num1==5){
        console.log('coder');}
    }
    console.log("ninja");
}
//activity3
var x='coding';
var y='dojo';
for (var num1=0;num1<=x.length-3;num1++){
    for(var num2=0;num2<=y.length-4;num2++)
    {console.log(x+y)}
}
//activity4
var msg1='hello';
var msg2='world!';
for (var num1=1;num1<=msg1.length;num1++){
    for(var num2=1;num2<=msg2.length;num2++){
        if (msg1.length==4){console.log(msg1+""+msg2);}
     }
   if (num1!=4){console.log(msg1.length+msg2.length);}
}
//activity5
var array=[5,3,4,1];
for (var x=0;x<array.length;x++){
    for(var y=array.length-1;y>=x;y--)
    {
        if (array[x]>array[y])
        {
            var temp=array[y];
            array[y]=array[x];
            array[x]=temp;
        }
    }
}
console.log(array);

//----------Level_9---------
//activity1
var number="";
var x=5;
while (x<10){
    number+=x;
    x++;
}
console.log(number);
//activity2
var count=1;
while(count<5){
    console.log("Dojo");
    count++;
}
//activity3
var x=1;
var y=48;
while (x<100){
    if(x==y){
        break;
    }
    x++;

}
console.log(x);
//activity4
var message="Coding";
var x=1;
while(x<100){
    x++;
}
console.log(message);
//activity5
var x=7;
var message="boom";

while(x>message.length){
    console.log(message+x);
    x--;
}

//----Level10------
//activity1
var x=[["coding","boom"],["dojo","yeah"]];
console.log(x[0][0]+"-"+x[1][0]);

//activity2
var x=[[5,10],[15,20,25,30],[45,50]];
console.log(x[1][3]+x[2][1]+x[0][0]);

//activity3
var x=2;
var y=[[2,4,6,8],[10],[12,32,50]];
if(y[0][0]==x)
    {
    console.log("Hello World");
}
else{
    console.log("Codingdojo");

}
//activity4
var numbers=[[1,4,5,7],[2,6,8,9]];
if (numbers[0][3]==7){
    numbers[0].push(10);
    console.log(numbers[0]);
}
//activity5
var x=[[2,4,6,8],[12],[10,32,50]];
if (x[1][0]-x[2][0]==x[0][0]){
    console.log(x[1][0]+x[2][1]+x[0][2]);
}
else{
    console.log(x[0][0]+x[1][0]+x[0][3]);
}
//------------Level11---------
//activity1
var x=[];
x[0]="Hello";
x[1]="World";
x[2]=100;
console.log(x.length+" "+x[0]);

//activity2
var x=2;
var points=[40,100,1,5,25,10];
if (points[x]==1){
    console.log(points[x-2]);
}
else{
    console.log("hello");
}
//activity3
var y=[1,2,3,4,5];
var z=[6,7,8,9,10];
if(y[x]+z[1]==z[4])
{
    console.log("Dojo");
}
else{
    console.log("Hello World");
}
//activity4
var x="boom";
var y=["hi","hello","hey"];
if(x.length==3){
    y.push(x);
    console.push(x[3]);
}
else{
    console.log(x);
}
//activity5
var x=["John","Chris","Mark","PJ"];
if (x.length==4){
    console.log(x[x.length-3]);
}
else{
    console.log("Dojo");
}
//--------------Level12--------------
//activity1
var a=100;
function abc(){
    var a=25;
}
console.log(a);
//activity2
var a=100;
function abc(){
    var a=25;
}
abc();
console.log(a);
//activity3
var a=100;
function abc(){
    var a=25;
    console.log(a);
}
abc();
console.log(a);
//activity4
var x=10;
function abc(x){
    console.log(x);
    return x*10;
}

console.log(x);
//activity5
var x=10;
function abc(x){
    console.log(x);
    return x*10;
}
abc(x);
console.log(x);
//activity6
var x=10;
function abc(x){
    console.log(x);
    return x*10;
}
var z=abc(x);
console.log(z);
//activity7
var x=10;
function abc(x){
    console.log(x);
    return x*10;
}
var z=abc(x)+abc(x);
console.log(z);
//activity8
var x=10,y=20;
function abc(x,y){
    x=x+10;
    y=y+10;
    console.log(x);
    console.log(y);
}

console.log(x);
console.log(y);
//activity9
var x=10,y=20;
function abc(x,y){
    x=x+10;
    y=y+10;
    console.log(x);
    console.log(y);
}
abc(x,y);
console.log(x);
console.log(y);
//activity10
var x=10,y=20;
function abc(x,y){
    x=x+10;
    y=y+10;
    console.log(x);
    console.log(y);
    return x*10;
}
z=abc(x,y);
console.log(x);
console.log(y);
console.log(z);
//activity11
var x=10,y=20;
function abc(x,y){
    x=x+10;
    y=y+10;
    return x*10;
}
z=abc(x,y)+abc(y,x);
console.log(z);
//activity12
var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for (var i=0;i<x.length;i++){
        x[i]=x[i]+2;
    }
}
abc();
console.log(x);
//activity13
var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for (var i=0;i<x.length;i++){
        x[i]=x[i]+2;
    }
    return x;
}
abc();
console.log(x);
//activity14
var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for (var i=0;i<x.length;i++){
        x[i]=x[i]+2;
    }
    return x;
}
x=abc();
console.log(x);
//activity15
function abc(num){
    var arr=[];
    for (var i=0;i<num;i++){
        arr.push(i)
    }
    return arr;
}
dojo=abc(5);
console.log(dojo);
//activity16
function abc(num){
    var arr=[];
    for (var i=0;i<num;i++){
        if(i%2==0){
            arr.push(i);
        }
    }
    return arr;
}
dojo=abc(5);
console.log(dojo);
//activity17
function abc(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="dojo";
        }
    }
    return arr;
}
output=abc([-3,0,3,-5]);
console.log(output);
//activity18
function abc(number){
    var arr=[];
    for (var i=0;i<number;i++){
        arr.push(0);}
    return arr;
}
output=abc(5);
console.log(output);    
//activity19
function abc(number){
    var sum=0;
    for (var i=0;i<=number;i++){
        sum=sum+i;}
    console.log(sum);
    return sum+10;
}
output=abc(2);
console.log(output);    
//activity20
function abc(number){
    var sum=0;
    for (var i=0;i<=number;i++){
        sum=sum+i;}
    console.log(sum);
    return sum+10;
}
output=abc(2)+abc(3);
console.log(output);    
//activity21
function looping(x,y){
    for(var i=0;i<x;i++){
        for (var j=0;j<y;j++){
            console.log(i*j);
        }
    }
    return x*y;
}
z=looping(2,3);
console.log(z);
