const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');
const PORT = 3000;


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// look in a directory called public when you see a .js file or a .css file
app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.send(`<h1>Welcome to your Basic Pokedex!</h1>`)
})

//Index Route ///
app.get('/pokemon', (req, res)=>{
    res.render("Index", {
        pokes: pokemon
            
    })
})


//Show Route ////
app.get('/pokemon/:indexOfPokemon', (req, res)=> {
    // res.send(pokemon[req.params.indexOfPokemon]);
    res.render("Show", {
        pokes: pokemon[req.params.indexOfPokemon]    
    })
})






app.listen(PORT, ()=>{
    console.log(`Listening for pokes on port ${PORT}`);
});