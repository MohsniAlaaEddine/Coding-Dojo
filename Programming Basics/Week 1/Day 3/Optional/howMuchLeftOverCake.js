function howMuchLeftOverCake(){
    var numberOfPièces = 12
    var numberOfPeople = 5
    var howMuchLeftOverCake= numberOfPièces% numberOfPeople
    if (howMuchLeftOverCake==0){console.log("Pas de restes pour toi !")}
    else if(howMuchLeftOverCake<=2 && howMuchLeftOverCake!=0){console.log("Il vous reste des restes")}
    else if(howMuchLeftOverCake>=3 && howMuchLeftOverCake<=5){console.log("Vous avez des restes à partager")}
    else{console.log("Organisez une autre fête!")}

return howMuchLeftOverCake
}
console.log(howMuchLeftOverCake())

