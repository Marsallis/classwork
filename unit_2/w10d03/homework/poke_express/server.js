const express = require('express');
const app = express();
const PORT = 3000;
// Models
const pokemon = require("./models/pokemon.js");
// Middleware
// Tell our server to use express react views as the view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// look in a directory called public when you see a .js file or a .css file
app.use(express.static("public"));
// RESTFUL ROUTES
// Controllers
// Index
app.get("/pokemon", (req, res) => {
    // res.send(pokemon);
    res.render("Index", {
        pokemon: pokemon
    })
});
// Show
app.get('/pokemon/:indexOfpokemonArray', (req, res) => {
    // console.log(req.params)
    // res.send(pokemon[req.params.indexOfpokemonArray]);
    res.render("Show", {
        pokemons: pokemon[req.params.indexOfpokemonArray]
    })
});
// listen on port
app.listen(PORT, () => {
    console.log("listening on " + PORT);
})