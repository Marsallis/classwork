const body = document.querySelector('body');
const app = document.getElementById('app');

// const isCool = false;
// const name = "Marsallis";
// const where = "anywhere";
// const verb = "beat";
// const sport = "basketball"
// const when = "anytime"
// body.innerHTML = `
//     <h1>${name} will ${verb} you ${where} ${when} at ${sport}</h1>
// `

// const person = {
//     name: 'Natalia',
//     isCool: true,
//     codingPowerLevel: 9001,
//     sayHello: function() {console.log('hello')}
// }

const data = [
    'Marty is awesome',
    'Natalia is spectacular',
    'Cody is tubular',
    'German is fantastic',
    'Josh is the goat duh',
    'Bruno is incredible',
    'Nando is amazing',
    'Arthur is ok i guess'
];
const list = document.createElement('ol'); // creating an empty ul and storing it in a variable called list
for(let i = 0; i < data.length; i++){
    const text = document.createTextNode(data[i]);
    const listItem = document.createElement('li');
    listItem.appendChild(text);
    list.appendChild(listItem);
    if(i === data.length - 1){
        app.appendChild(list);
    }
}



// set x to 0, add loop for when x <= 10, add 2 to find even numbers, add them together.
// let x = 0
// for(x >= 10); i+2
// const list= 

