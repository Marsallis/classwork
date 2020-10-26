/////////////////////////////////////////////////////////////////////
// Easy Going
/////////////////////////////////////////////////////////////////////

// var ourArray = []
// for (var i = 0; i <= 20; i++) {
//     ourArray.push(i);
// }
// console.log(ourArray);



///////////////////////////////////////////////////////////////////
// Get Even
//////////////////////////////////////////////////////////////////

// var ourArray = []
// for (var i = 0; i <= 200; i += 2) {
//     ourArray.push(i);
// }
// console.log(ourArray);



///////////////////////////////////////////////////////////////////
// Fizz Buzz
//////////////////////////////////////////////////////////////////

// var ourArray = []
// for (var i = 1; i <= 100; i++) {
//     if (i%15 == 0)
//         console.log("FizzBuzz");
//     else if ((i%3) == 0)
//         console.log("Fizz");
//     else if ((i%5) == 0)
//         console.log("Buzz");
//     else
//         console.log(i);    
// }



//////////////////////////////////////////////////////////////////
// Wild Wild Life
//////////////////////////////////////////////////////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//1.//
// plantee[2] = "5001";
// console.log(plantee)

//2.//
// wolfy[3] = "Gotham City";
// console.log(wolfy)

//3.//
// dart.push("Hawkins")
// console.log(dart)

//4.//
// wolfy[0] = "Gameboy"
// console.log(wolfy)




//////////////////////////////////////////////////////////////////
// Yell at the Ninja Turtles
///////////////////////////////////////////////////////////////////

// var array1 = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// var x = array1.toString();

// for (var element of array1) {
//    console.log(element);
// }

//Couldnt figure out where to fit the toUpperCase();









//////////////////////////////////////////////////////////////
// Methods
///////////////////////////////////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// //1.//
// favMovies.sort();


// //2.//
// favMovies.pop(favMovies);


// //3.//
// favMovies.push('Guardians of the Galaxy');


// //4.//
// favMovies.reverse();


// //5.//
// favMovies.shift();


// //6.//
// favMovies.unshift();


// //7.//
// favMovies.splice(3, 1, "Avatar");


// //8.//
// favMovies.slice(9, 18);


// //9.//
// i = favMovies.slice(9, 18);
// console.log(i);

// //10.//
// console.log(favMovies)





////////////////////////////////////////////////////////////////////
// Where is Waldo
/////////////////////////////////////////////////////////////////////

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];


//1.//
// whereIsWaldo.splice(1,1);
// console.log(whereIsWaldo);

//2.//
// whereIsWaldo[2][2] = "No One"
// console.log(whereIsWaldo)

//3.//
// console.log(whereIsWaldo[3][1][1])





////////////////////////////////////////////////////////////////
// Excited Kitten
////////////////////////////////////////////////////////////////

// const kittyTalk = ["Love me, pet me! HSSSSSS!"]

//??? couldnt figure out how to write a code that logs a string in an array multiple times???//






/////////////////////////////////////////////////////////////////
// Find the Median
/////////////////////////////////////////////////////////////////

// const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12]


// const median = nums => {
//     const mid = Math.floor(nums.length / 2);
//     nums2 = [...nums].sort((a, b) => a - b);
//     return nums.length % 2 !== 0 ? nums2[mid] : (nums2[mid -1] + nums2[mid]) / 2;
// };

// console.log(median(nums))