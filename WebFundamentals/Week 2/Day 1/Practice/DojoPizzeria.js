function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza= {}
    pizza.crustType = crustType ;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses
    pizza.toppings =  toppings
return pizza;
}
var pizza1 = pizzaOven("deep dish","traditional","['mozarella']","['pepperoni','sausage']");
console.log(pizza1);
var pizza2 = pizzaOven("hand tossed","marinara","['mozarella','feta']","['mushrooms','olives','onions']");
console.log(pizza2);
var pizza3 = pizzaOven("sausage & cheese","tomato sauce","['mozarella','parmesan']","thon");
console.log(pizza3);
var pizza4 = pizzaOven("crispy","tomato sauce","mozarella","parsley","thon");
console.log(pizza4);

