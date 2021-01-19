require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//MONGOOSE CONNECTION
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
})

mongoose.connection.once('connected', ()=> {
    console.log('Mongo connected the world is yours')
})

// CRUD 
// REST 
// INDUCES 
// INDEX 
app.get('/hotels', (req, res) => {
    Hotels.find({}, (err, foundHotels) => {
        if(!err){
            res
              .status(200)
              .json(foundHotels);
        } else {
            res
              .status(400)
              .json(err)
        }
    })
})

//DELETE
app.delete('/hotels/:id', (req, res) => {
	Hotels.findByIdAndDelete(req.params.id, (err, foundHotel) =>{
		if(!err){
			res
				.status(200)
				.json(foundHotel)
		} else {
			res
				.status(400)
				.json(err)
		}
  })
})

//UPDATE
app.put('/hotels/:id', (req, res) => {
	Hotels.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedHotel) =>{
		if(!err){
			res
				.status(200)
				.json(updatedHotel)
		} else {
			res
				.status(400)
				.json(err)
		}
  })
})

//CREATE
app.post('/hotels', (req, res) => {
    console.log(req.body)
Hotels.create(req.body, (err, createdHotel) => {
    if(!err){
                res
                    .status(200)
                    .json(createdHotel)
            } else {
                res
                    .status(400)
                    .json(err)
            }
})
})

//SHOW
app.get('/hotels/:id', (req, res) => {
	Hotels.findById(req.params.id, (err, foundHotel) =>{
		if(!err){
			res
				.status(200)
				.json(foundHotel)
		} else {
			res
				.status(400)
				.json(err)
		}
  })
})



app.listen(PORT, () => 
console.log(`Checked in at ${PORT}`));