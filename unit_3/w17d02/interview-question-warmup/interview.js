// function countVowels(str){
//     const vowels = ['A', 'E', 'I', 'O', 'U' , 'Y'];
//     const word = str.toUpperCase().split('');
//     let count = 0;

//     word.map((char) => {
//         vowels.map((vowel) => {
//             if (char === vowel){
//                 count++
//             }
//         })
//     })
//     return console.log(count);
// }

// countVowels('Marsallis');


// const wordArray = 'laserbeam'; 
function vowels(str){
    let count=0;
    const vowel=['a', 'e', 'i', 'o', 'u'];
    const wordArray = str.toLowerCase()
    for (let char of wordArray){
        if (vowel.includes(char)){
            count++;
        }
    }
    return console.log(count);
    // console.log(char);
}
vowels('laserbeam');