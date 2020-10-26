// const printBoo = () => {
//     console.log("Boo");
// }

// printBoo();

// const printSum = () => {
//     console.log(10 + 10);
// }

// // printSum();

// const calculateArea = (num1, num2) => {
//     console.log(num1 * num2);
// }

// calculateArea(3, 4);

// const minusOne = (num) => {
//     console.log(num - 1);
// }

// minusOne(10);
// minusOne(100);
// minusOne(Infinity);

// const makeSentence = (wordOne, wordTwo, wordThree) => {
//     console.log(`${wordOne} ${wordTwo} ${wordThree}`);
// }

// makeSentence("I", "want", "chimichangas.");

const vowels = ["a", "e", "i", "o", "u"];

const isAVowel = (letter) => {
    letter = letter.toLowerCase();
    if (vowels.indexOf(letter) !== -1) {
        return true;     
    }
    return false;  
    
}  

console.log(isAVowel("a"));