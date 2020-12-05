class Pets {
    constructor(owner, name){
        this.owner = owner
        this.name = name
    }
    walk() {
        console.log('walka walka')
    }
}
const newPet = new Pets('Mine', 'Bruce')

class Dog extends Pets {
    constructor(owner, name, price){
        super(owner, name, price);
        this.price = 20
    }
    bark() {
        console.log('bark')
    }
    chaseTail() {
        console.log('oh boy oh boy oh boy')
    }
    getPrice() {
        console.log(this.price);
    }
}
const Duke = new Dog('Sal', 'Duke', 20)
Duke.bark()
Duke.chaseTail()
Duke.getPrice();