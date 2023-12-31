class Ninja{
    constructor(name){
        this.name=name
        this.health=90;
        this.speed=3;
        this.strenght=3;
    }
    sayName() {
        console.log(`his name is ${this.name}`)
    }

    showStats() {
        console.log(`name: ${this.name} / strength: ${this.strength} / speed: ${this.speed} / health: ${this.health}`);
    }

    drinkSake(){
        this.health+=10;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name)
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("message");
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
