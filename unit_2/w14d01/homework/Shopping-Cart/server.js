const express = require('express');
const app = express();
const Products = require('./models/Products');
const PORT = 3000;


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.send(`<h1>Products</h1>`)
})

//Index Route ///
app.get('/Products', (req, res)=>{
    res.render("Index", {
        prods: Products
            
    })
})


//Show Route ////
app.get('/Products/:indexOfProducts', (req, res)=> {
    res.render("Show", {
        Prods: Products[req.params.indexOfProducts]    
    })
})






app.listen(PORT, ()=>{
    console.log(`Listening for Products on port ${PORT}`);
});
