const player = {
    name: 'Jake the great',
    health: 1000,
    power: 1000,
    stamina: 1000
}
const bigBadBoss = {
    name: 'Alex the Merceless',
    health: 10000000000000000000,
    power: 100000000000000000,
    stamina: Infinity
}
const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
    const newPlayer = {
      name: nameIs,
      health: healthIs,
      power: powerIs,
      stamina: staminaIs
    }
    return newPlayer
  }
  const kellie = createPlayer('Kellie', 100000000000, 10000000000000, Infinity)
  const german = createPlayer('German', 100000, 10000, 89567)
//   console.log(kellie);
//   console.log(german);
  // Class
  class Character {
      greet() {
          console.log('hi');      
      }
      punch() {
          console.log('POW');
      }
      kryptonite() {
          bigBadBoss.power -= 100000000000000000;
          console.log("I've tooken all your power!")

      }
  }


  // characterArthur
  // CharacterArthur
// instances of the class
const me = new Character();
const you = new Character();
// console.log(me,you);

// console.log(typeof me);
// console.log(me instanceof Character);

player.kryptonite(bigBadBoss)
