const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <h2><a href="/98">Take one down, pass it around</a></h2>`
    )
})

app.get('/:numberOfBottles', (req, res) => {
    const numberOfBottles = parseInt(req.params.numberOfBottles);
    const nextBottles = numberOfBottles - 1;
    if (numberOfBottles > 0){
    res.send(`
    <h1>${numberOfBottles} bottles of beer on the wall</h1>
    <h2><a href="/${nextBottles}">Take one down, pass it around</a></h2>
    `)
    } else {
        res.send(`
        <h1><a href="/">Start Over</a></h1>
        `)
    }
    
})















app.listen(PORT, (req, res) => {
    console.log(`listening on PORT ${PORT}`)
})