// class Hamster {
//     constructor(owner, name, price) {
//         this.owner = owner;
//         this.name = name;
//         this.price = price;
//     }
//     wheelRun() {
//         console.log('squeak squeak');
//     }
//     eatFood() {
//         console.log('nibble nibble');
//     }
//     getPrice() {
//         return this.price 
//     }
// }
// class Person {
//     constructor(name) {
//         this.name = name;
//         this.age = 0;
//         this.height = 0;
//         this.weight = 0;
//         this.mood = 0;
//         this.hampsters = [];
//         this.bankAccount = 0;
//     }
//     getName() {
//         return this.name
//     }
//     getAge() {
//         return this.age
//     }
//     getWeight() {
//         return this.weight
//     }
//     greet() {
//         console.log(`Hello ${this.name}`)
//     }
//     eat() {
//         this.weight++;
//         this.mood++
//     }
//     exercise() {
//         this.weight--;
//     }
//     ageUp() {
//         this.age++;
//         this.height++;
//         this.weight++;
//         this.mood++;
//         this.bankAccount++;
//     }
// }
// buyHamster(hamster); {
//     hamster.owner = this.name;
//     this.hamsters.push(hamster);
//     this.mood += 10;
//     this.bankAccount -= hamster.getPrice(); 
// }
// const Timmy = new Person('Timmy')
// Timmy.ageUp(5);
// Timmy.eat(5);
// Timmy.exercise(5);
// Timmy.ageUp(9);
// hamster.owner = 'Timmy';
// this.hampsters.push(1);
// Timmy.ageUp(15);
// Timmy.eat(2);
// Timmy.exercise(2);
// console.log(Timmy)
// class hero {
//     constructor(name, health){
//     this.name = name;
//     this.health = 100;
//     this.weapons = {
//         sprinkleSpray: 5,
//         sugarShock: 10
//     }
//     this.catchPhrases = ["i'm fresher than day old pizza",
//     "you can't count my calories"]
//     }
//     talksass(){
//         console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
//     }
//     announceHealth(){
//         console.log("Dougie has " + this.health + " hitpoints!!!");
//     }
//     fight(enemy){
//         enemy.health -= this.weapons.sprinkleSpray
//         console.log(`Pizza Rat has been hit with tons of sprinkles and now has ${pizzaRat.health} HP left!`)
//     }   
// }
// const DougieDonut = new hero('DougieDonut');
// class enemy {
//     constructor(name, health){
//     this.name = name;
//     this.health = 100;
//     this.weapons = {
//         pepperoniStars: 5,
//         cheeseGrease: 10    
//         }
//     this.catchPhrases = ["i'm youtube famous",
//     "i'm more dangerous than an uncovered sewer"]
//     }
//     talksmack(){
//         console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
//     }
//     announceHealth(){
//         console.log("Pizza Rat has " + this.health + " hitpoints!!!");
//     }
//     fight(hero){
//         hero.health -= this.weapons.cheeseGrease;
//         console.log(`Dougie Donut has been covered in cheese grease and now has ${DougieDonut.health} HP left!`)
//     }
// }
// const pizzaRat = new enemy ('PizzaRat');
// DougieDonut.talksass();
// pizzaRat.talksmack();
// DougieDonut.announceHealth();
// pizzaRat.announceHealth();
// DougieDonut.fight(pizzaRat);
// pizzaRat.fight(DougieDonut);