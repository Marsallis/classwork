//////////////////////// ME, ME, ME

const me = {
    firstName: "Nani",
    lastName: "Pelekai",
    age: 21,
    email: "nani@foo.bar",
    placeOfResidence: "Indiana",
}

// // console.log(me);

// console.log(me.firstName);
// me.age = 1000

// // console.log(me);

// console.log(me.placeOfResidence);

//me.placeOfResidence = "Indiana";



///////////////////////////// Fancy Greeting
const you = {
    firstName: "Sal",
    lastName: "Faircloth",
    age: 24,
    email: "marsallisf@gmail.com"
}

const fancyGreeting = (obj) => {
    console.log("Greetings, " + obj.firstName + obj.lastName);
}

fancyGreeting(me);
fancyGreeting(you);

////////////////////////////Slimer

// // 1.
//  console.log(monster.name);

//  // 2.
// monster.type = "creature"

// // 3.
// monster.age = 6
// console.log(monster);



/////////////////////////////////Ogres

const adventurer = {
    name: "Sal",
    hitpoints: 10,
    medicines: 0,
    weapon: "Axe",
}

const ogre = {
    name: "Shrek",
    hitpoints: "20",
    medicine: 0,
    weapon: "Gun",
}

/////////////// we will do a for loop to simulate the fight and diminish hitpoints and declare damage inflicted on a character.

/////////////// if statement to declare winner when hitpoints of one of the characters hits zero.


