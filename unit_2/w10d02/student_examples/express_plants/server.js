require('dotenv').config();
const express = require('express');
const app = express();
// merges server.js to plants.js //
const plants = require('./models/plants').plants
const PORT = 3000;


app.use((req, res, next)=>{
    if(req.query.password === process.env.password){
        next()
    }else {
        res.setStatus(404).send('No Access For You Youre Not Makari')
    }
})

app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});



app.get('/name/:firstName', (req, res) =>{
    const name = req.params.firstName;
    const lastName = req.query.lastName;
    console.log(req.query)
    res.send(`the name is ${lastName}, ${name} ${lastName}. And I like my martini shaken not stirred`)
})

app.get('/add/:num1/:num2', (req, res)=>{
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)

if (!isNaN(num1) && !isNaN(num2)){
    res.send(`<h1>The sum is ${num1 + num2}</h1>`);
} else {
    res.send(`<h1>The sum can't be determined try again</h1>`)
}
})






app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})