// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Greetings!"));



var txt;
var counts = {};

function preload() {
    txt = loadStrings('words.txt');
}

function setup() {
    var allwords = txt.join("\n");
    var tokens = allwords.split(/\W+/);
    // console.log(tokens);
    for (var i = 0; i < tokens.length; i++) {
        var word = tokens[i];
        console.log(word);
        if (counts[word] === undefined) {
            counts[words] = 1;
        } else {
            counts[word] = counts[word] + 1;
        }
    }
}