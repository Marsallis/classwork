const express = require('express');
const app = express();
const PORT = 3000;

// Models 
const Budget = require('./models/budget.js');

//Middleware 
app.use((req, res, next)=> {
    console.log('I run for all routes');
    next();
})
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'jsx'); //tell our server to use express react views as the view engine
app.engine('jsx', require('express-react-views').createEngine()); 
app.use(express.static("public")); // look in a directory called public when you see a .js or .css file
// tell express to take data from a form and put it onto the url, parse data from url encoded form request, req.body = data from the form


//Restful Routes
app.get('/budget', (req, res) => {
    res.render("Index", {
        Budget: Budget
    });
})
// New Route 
app.get('/budget/new', (req, res)=>{
    res.render('New')
});

// Create Route
app.post('/budget', (req, res)=>{
    Budget.push(req.body);
    res.redirect('/budget');
    
});
//Show Route 
app.get('/budget/:i', (req, res) => {
    // console.log(req.params)
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render("Show", {
        Budget: Budget[req.params.i]
    })
});