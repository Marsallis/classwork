const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const nums = [ 37, 826,209, 419, 309, 48, 738,709,728, 607, 9, 863, 976, 588, 611, 164,383, 261, 14, 525,479,169,755,574, 330,
  736, 541, 838, 577,957,179,436,333, 206, 295,744,926, 799, 691,259,401,104,630,645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
  13,13,17, 5, 5, 18, 12, 5, 18, 11, 2, 2,  9,  8, 4,5,18, 15,18,0,6,11,18,14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
  10, 3, 3, 3, 18, 12, 14 ]
const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]
///////////////EVERY 
//1.//
// const greaterThanZero = nums.every( (nums) => {
//     return nums >= 0;
// });
// console.log(greaterThanZero);
//2.//
// const shorterThanEight = (string) => {
//     return string.length < 8;
// }
// console.log(panagram.every(shorterThanEight));
// console.log(panagrams.every(shorterThanEight));
/////////////////FILTER
//1.//
// const lessThanHundred = (num) => {
//     return num < 100;
// }
// console.log(smallNums.filter(lessThanHundred));
// console.log(nums.filter(lessThanHundred));
//2.//
// const evenLength = (string) => {
//     return string.length % 2 === 0;
// }
// console.log(panagram.filter(evenLength));
// console.log(panagrams.filter(evenLength));
//////////////////FIND
//1.//
// const divisibleByFive = (num) => {
//     return num % 5 === 0;
// }
// console.log(smallNums.find(divisibleByFive));
// console.log(nums.find(divisibleByFive));
//2.//
// const longerThanSix = (string) => {
//     return string.length > 6;
// }
// console.log(panagrams.find(longerThanSix));
///////////////FIND INDEX
//1.//
// const divisibleByThree = (num) => {
//     return num % 3 === 0;
// }
// console.log(nums.findIndex(divisibleByThree));
//2.
// const shorterThanTwo = panagrams.findIndex( (panagrams) => {
//     return panagrams.length < 2;
// })
// console.log(shorterThanTwo);
// No words are shorter than 2 in either array
////////////////////FOR EACH
//1.//
// const timesThree = nums.forEach( (nums) => {
//     console.log(nums * 3);
// })
// //2.//
// const exclamation = panagram.forEach( (string) => {
//     console.log(string + "!");
// })
/////////////////MAP
//1. 
// const arrayMultiplied = smallNums.map( (smallNums) => {
//     return smallNums * 100;
// })
// console.log(arrayMultiplied);
// //2.
// const uppercase = panagrams.map((panagrams) => {
//     return panagrams.toUpperCase();
// })
// console.log(uppercase);
////////////////REDUCE
//1.//
// const sumNumbers =  nums.reduce((acc, curr, nums) => {
//     return acc + curr;
// })
// console.log(sumNumbers);
//2.//
// const Concatenate = panagram.reduce((acc, curr, panagram) => {
//     return acc + curr;
// })
// console.log(Concatenate);
//////////////////////////SOME
//1.//
// const dividedBySeven = nums.some ((nums) => {
//     return nums % 7 === 0;
// })
// console.log(dividedBySeven);
//2.//
// const haveA = panagram.some((panagram) => {
//     return panagram.includes('a');
// })
// console.log(haveA);
///////////////////////////SORT
//1.//
// nums.sort();
// console.log(nums);
//return was in ascending order
//2.//
//sort in ascending order
// const numsAscending = nums.sort((a, b) => {
//     return a-b;
// })
// console.log(numAscending);
//3.//
//sort in descending order
// const numsDescending = nums.sort((a, b) => {
//     return b-a;
// })
// console.log(numDescending);
//4.//
//sort the words in ascending order
// const ascendingWord = panagram.sort();
// console.log(ascendingWord);
//5.//
//sort the words in descending order
// const descendingWord = panagram.sort().reverse();
// console.log(descendingWord);
