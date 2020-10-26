////////////////////////////////////////////
// Palindrome
////////////////////////////////////////////



// const checkPalindrome = (string) => {
//     string = string.toLowerCase();
//     let reverseString = string.split("").reverse().join("");
//     if ( string === reverseString ) {
//         return true
//      } else {
//          return false
//      }
// }
// console.log(checkPalindrome("radar"));




//////////////////////////////////////////
// Sum Array
///////////////////////////////////////////




// var sumArray = [1, 2, 3, 4, 5, 6] 

// for (var i = 0, sum = 0; i < sumArray.length; sum += sumArray[i++]);

// console.log(sum)




/////////////////////////////////////////////
//Prime Numbers
//////////////////////////////////////////////

//prime number = can only be divided by itself or 1.

//////////////
//Step One
//////////////

// function isPrime(num){
//     if(num <= 2){
//         return false
//     }

//     for(let i = 2; i<num;i++){
//         if(num % i === 0){
//             return false;
//         }
//     }

//     return true
// }

// console.log(isPrime(10));

/////////////
//Step Two
/////////////

// function printPrime(num){
//     var temp = 0;
//     for(var i=1; i <=num; i++){
//         for(var j=2;j<=i-1;j++){
//             if(i%j == 0){
//                 temp += 1;
//             }
//         }
//         if(temp == 0){
//         }else{
//             temp = 0;
//         }
//     }
// }
// console.log(printPrime(97))




//////////////////////////////////////////////
// Rock Paper Scissors
//////////////////////////////////////////////



