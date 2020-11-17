alert('Quick! Aliens are attacking Earth, we must act now!');
prompt('Would you like to ATTACK the aliens and defened your planet, or RETREAT?')
let action = null 
if (action === 'retreat') {
    console.log('You retreated and let Earth be destroyed!')
}else{
    attackAlien();
}
// Make a USS Ruth class
class ussRuth {
    constructor(){
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }
}
// Make first alien ship class
class Ship {
    constructor(make){
        this.name = 'Alien Ship';
        this.firepower = Math.floor((Math.random() * 3) + 2);
        this.accuracy = Math.floor((Math.random() * 3) + 6) / 10;
        this.hull = Math.floor((Math.random() * 4) + 3);
    }
    createShip(i){
        const newShip = new Ship(i);
        this.ships.push(newShip);
    }
}
//Make remaining ships and the attacking ship
const USS = new Ruth();
const alienShip = new Alien();
alienShip.createShip(1);
alienShip.createShip(2);
alienShip.createShip(3);
alienShip.createShip(4);
alienShip.createShip(5);
alienShip.createShip(6);
letAttackingShip = 0;
// function to attack alien ship
let attackAlien = function() {
    if ((Math.random() < USS.accuracy)) {
        alienShip.hull = alienShip.hull - ussRuth.firepower ,
        console.log(`You hit an alien ship for ${ussRuth.firepower} damage!`);
    }else {
        console.log('you missed your attack on the Alien ship!')
    }
}
// function for alien ship to attack USS Ruth
let attackUSS = function() {
    if ((Math.random() < alienShip.accuracy)) {
        USS.hull = USS.hull - alienShip.firepower,
        console.log(`You were hit by an alien ship for ${alienShip.firepower} damage!`);
    } else {
        console.log('you dodged an attack by the Alien ship, we got lucky this time!')
    }
}
// function to attack next ship after first is destroyed
let nextMove = function() {
    if (alienShip.ships[letAttackingShip].hull > 0 && attackingShip > 6 {
        attackAlien();
    } else {
        console.log('You destroyed all the alien ships, great job!!!')
    }
}





