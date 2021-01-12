const express = require('express');
const app = express();
const PORT = 3000;
const magic = require('./magic');


// GREETINGS
app.get('/:name', (req, res) => {
    
    res.send(`Hello, stranger`)
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    res.send(`I recognize you! What's up ${name}`)
})


// TIP CALCULATOR

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseInt(req.params.total);
    const tipPercentage = parseInt(req.params.tipPercentage) / 100;
    const tipAmount = total * tipPercentage

    res.send(`${tipAmount}`)

})

// MAGIC 8 BALL

app.get('/magic/:question', (req, res) => {
    const question = req.params.question
    const answer = magic[Math.floor((Math.random() * magic.length))];

    res.send(`${question}
    <h1>${answer}</h1>
    
    `);
    
    
})







app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`)
})