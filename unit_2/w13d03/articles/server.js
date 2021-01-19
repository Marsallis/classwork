require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const Schema = mongoose.Schema;
const articleSchema = new Schema({
	title:  { type: String, required: true, unique: true }, //can say whether we want properties to be required or unique
	author: { type: String, required: true },
	body:   String,
	comments: [{ body: String, commentDate: Date }], // can have arrays of objects with specific properties
	publishDate: { type: Date, default: Date.now }, // can set defaults for properties
	hidden: Boolean,
	meta: { // can have properties that are objects
		votes: Number,
		favs:  Number
	}
}, {timestamps: true});
const Article = mongoose.model('Article', articleSchema);
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Mongoose Connection
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
})

mongoose.connection.once('connected', ()=> {
    console.log('Mongo connected the world is yours')
})

// CRUD --- Create, Read, Update, Destroy

// REST --- Representational State Transfer

// INDUCES ------


// INDEX ----- READ
app.get('/articles', (req, res) => {
    Article.find({}, (err, foundArticles) => {
        if(!err){
            res
              .status(200)
              .json(foundArticles);
        } else {
            res
              .status(400)
              .json(err)
        }
    })
})

// NEW -------- shows a form so the user can do the create function

// DELete

// Update
app.put('/article/Id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id.req.body, { new: true}, (err, updatedArticle) => {
        if(!err){
            res  
              .status(200)
              .json(updatedArticle)
        } else {
            res
              .status(400)
              .json(err)
        }
    })
})

// CREATE

app.post('/articles', (req, res) => {
    Article.create(req.body, (err, createdArticle) => {
        if(!err){
            res
              .status(200)
              .json(createdArticle)
        } else {
            res
              .status(400)
              .json(err)
        }
    })
})

// EDIT ----------- show a form so users can do the update functionality

// SHOW

app.get('/articles/:id', (req, res) => {
	Article.findById(req.params.id, (err, foundArticle) =>{
		if(!err){
			res
				.status(200)
				.json(foundArticle)
		} else {
			res
				.status(400)
				.json(err)
		}
  })
})


app.listen(PORT, () => console.log('we in the building at ' + PORT))