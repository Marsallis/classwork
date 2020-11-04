// const adventurer = {
//     name: "Arthur",
//     hitpoints: 225,
//     belongings: [
//         {
//             name: "excalibur",
//             price: 1000000
//         },
//         {
//             name: "the potion of healing",
//             price: 250
//         },
//         {
//             name: "tums",
//             price: 20
//         }
//     ],
//     getPrice(index){
//         return this.belongings[index].price

//     }
// }

// adventurer.belongings.push("sledgehammer");
// // console.log(adventurer.belongings[0].price);

// console.log(adventurer.getPrice(0));

// for(let i = 0; i < adventurer.belongings.length; i++){
//     console.log(adventurer.belongings[i].price)
// }

// console.log()




const adventurer = {
    name: "Kratos",
    hitpoints: 500,
    power: 60,
    belongings: ['Levithian Axe', 'Blades of Chaos'],
    companion: {
        name: "Loki",
        type: "Giant",
        weapons: ['Talon Bow', 'Arrows', 'Fayes knife'],
        companion: {
            name: "Mimir",
            type: "head",
            powers: ['Magic Eyes', 'Superhuman Durability', 'wisdom']
        }
    }
},
attack(enemy) {
    enemy.hitpoints = enemy.hitpoints - this.power
    console.log(`I have attacked ${enemy.name} and they now have ${enemy.hitpoints}`)
    if(enemy.hitpoints < 0) {
        console.log(`${enemy.name} has been defeated`);
    }
},