/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const strA = "object oriented programming";
function acronym(str){
    var acro = ""
    x=str.split(' ')
    for(i=0;i<x.length;i++){
    y=(x[i][0])   
    acro+=y
}
console.log(acro.toUpperCase());
}
acronym(strA)
acronym(strA)
acronym(strA)

// const expectedA = "OOP";

// // The 4 pillars of OOP
const strB = "abstraction polymorphism inheritance encapsulation";
// const expectedB = "APIE";

const strC = "software development life cycle";
// const expectedC = "SDLC";

// //- Bonus: ignore extra spaces
// const strD = "  global   information tracker    ";
// // const expectedD = "GIT";