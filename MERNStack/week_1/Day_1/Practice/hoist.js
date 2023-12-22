console.log(hello);                                   
var hello = 'world';          
// var hello;
// console.log(hello); // logs undefined
// example = "world";

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// needle = "haystack";
// function test()
// needle ="magnet"
//log (needle)// log magnet



var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan); 
// }//print is not defined
// console.log(brendan);// log super cool


var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food;
// eat();
// function eat(){
//     var food = 'gone';
//     food = 'half-chicken';
//     console.log(food);
// }
// console.log(food); // log chiken half chiken


mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// mean();// mean is not a function
// var mean = function() {
//     var food = "fish";
//     food = "chicken";
//     console.log(food);// log chicken
//     
//     console.log(food);// log chicken
// }
// console.log(food);// chicken
// console.log(food);//chicken


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// var genre = "disco";
// rewind();
// function rewind() {
//     var genre = "r&b";
//     genre = "rock";
//     console.log(genre);//log rock

//     console.log(genre);// log rock
// }
// console.log(genre);// log disco
// console.log(genre);// log disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// dojo = "san jose";
// console.log(dojo);// log san jose
// function learn() {
//     var dojo
//     dojo = "seattle";
//     console.log(dojo);// log seatle
//     dojo = "burbank";
//     console.log(dojo);// log burbank
// }
// learn();
// console.log(dojo);// log san jose


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;{name,students}
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
//     }
// console.log(makeDojo("Chicago", 65));//{chicago,65,true}
// console.log(makeDojo("Berkeley", 0));// {berkeley,0}


