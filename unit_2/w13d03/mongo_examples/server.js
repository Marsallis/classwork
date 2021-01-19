const MONGO_URI = "mongodb+srv://arthur:Td9VJXbbc3k2yR2@cluster1.mauz5.mongodb.net/marsallisf?retryWrites=true&w=majority";

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    isCool: Boolean,
})

// Model
const Student = mongoose.model('Student', studentSchema);

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.connection.once('connected', () => console.log('connected to mongo'));


// Basic NEST API
// INDUCES
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/students', (req, res) => {
    Student.create(req.body, (err, createdStudent)=> {
        if(!err){
            res
                .status(200)
                .json(createdStudent)
        }else {
            res
                .status(400)
                .json(err)
        }
    })
})



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})