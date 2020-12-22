const express = require('express');
const app = express();
const PORT = 3000;

const superheroes = [
    {
        name: "Superman",
        powers: ['flight', 'invulnerability', 'x-ray vision']
    },
    {
        name: "Wonder Woman",
        powers: ['flight', 'super stregth', 'super speed']
    },
    {
        name: "Black Panther",
        powers: ['super endurance', 'super strength', 'martial arts']
    },
];

const villians = [
    {
        name: "Lex Luthor",
        powers: ["super brain"]
    },
    {
        name: "Ares",
        powers: ["shape shifting", "teleporting"]
    },
    {
        name: "Killmonger",
        powers: ["ability to fit in Black Panther's suit", "internet agreement that he looks badass"]
    }
];

//Index
app.get("/superheroes", (req, res) => {
    res.send(superheroes);
});

app.get("/villians", (req, res) => {
    res.send(villians);
});

// Show
app.get('/superheroes/:indexOfSuperheroesArray', (req, res) => {
    res.send(superheroes[req.params.indexOfSuperheroesArray]);
});

app.get('/villians/:indexOfVilliansArray', (req, res) => {
    res.send(villians[req.params.indexOfVilliansArray]);
});



// listen on PORT
app.listen(PORT, () => {
    console.log("listening on " + PORT);
})