// place holder for HW
/* 1. DRY stads for dont repeat yourself 
We should pay attention because it makes your code efficient and it reduces repeating code
We can avoid repeating ourselves with while or for loops and the ability to reassign variables
*/

/* 2. a const is a value that will stay the same throughout the code
a let is used for a value that will be changed throughout the code, it can be reassigned to nother value later.
a var is an outdated let (relic)
*/

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kelvin';
// const f = false;
// let g = 0;

// console.log(a != b);
// console.log(c > d);
// console.log('Name' == 'Name');
// console.log(a != b + c);
// console.log(a * a == d);
// console.log(e != 'Kelvin');
// console.log(48 == '48');
// console.log(f !> e);
// console.log(g);

// g = b + c
// console.log(g);

// I used Let because the values were changing
//If i do not use let g = 0, i get an error because 48 does not match '48'
// If i use 10 = g, i get an error stating " Invalid left-hand side in assignment"

//Bonus Challenge
// || means OR operator and && means AND operator
// console.log(a === (b || f) < !f && e === c);

// While Loops/ Infinite Loops
// First code is na infinite loop because there is nothing to make it false, so it will always run while it is true.
// Second code is not aninfinite loop because the value chages to false, which will not make this an infinite loop.

// Reading code 
// let letters = "A";
// let i = 0;

// while (i < 20) { //While i is less than 20
//     letters += "A"; //add letter by "A"
//     i++; //increase i by 1 each loop
// }

// console.log(letters); // I believe there will be 20 A's written by the time i = 20 and then the loop will stop.
// i thought the code would give me 20 lines of code, each time added an A, but instead gave me just 21 A's.

//For loops are different than while loops because while loops can be infinite, while for loops can be self contained and can create the variable and check the condition within the loop.
// first is a condition (let), second is a boolean (<), third is the console.log (whats going to come out)