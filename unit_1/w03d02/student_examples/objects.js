const house = {
    doors: 6,
    windows: 9,
    furniture: ["chair", "couch"]
};

// house.windows = 30;
console.log(house.windows);
console.log(house['windows']);

for (let i = 0; i < 2; i++) {
    // house["key" + i] = i;
    house[i] = i;
}
// console.log(house["1"]);

for (let key in house) {
    console.log(house[key]);
}
// house.hasGarden = false;

// if (house.hasGarden) {
//     console.log("Has Garden")
// } else {
//     console.log("no garden");
// }

// for (let i = 0; i <= house.doors; i++) {
//     console.log(i);
// }

// console.log(house);
// console.log(house.doors);

// console.log(house);
