let imAwake = true;
let count = 0;
while (imAwake){
    console.log("I am awake");
    count++;
    console.log("the hour is" + " " + count);
    if(count <= 24) {
        continue;
    }
    isAwake = false;
}

if (isAwake){
    console.log("still awake");
} else {
    console.log('zzzzzzzzzzzz');
}