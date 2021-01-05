const express = require('express');
const app = express();
const PORT = 3000;

// Models
const Budget = require("./models/Budget.js");

//Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//Index
app.get("/Budget", (req, res) => {
    // res.send(budgets);
    // res.render("Index", {
    //     Budget: Budget
    // })
    console.log(Budget);
});


// listen on port
app.listen(PORT, () => {
    console.log("listening on " + PORT);
})
