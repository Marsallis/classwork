const express = require('express');
const app = express();
const PORT = 3000;
const methodOverride = require('method-override'); // is to allow us to override an HTTP Method
app.use(express.urlencoded({extended: false})); // bodyParser Middleware NEED THIS FOR NEW, EDIT, UPDATE AND CREATE TO WORK
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
const data = [
    {
        name: 'carrots',
        color: 'orange'
    },
    {
        name: 'celery',
        color: 'green'
    },
    {
        name: 'lettuce',
        color: 'green'
    }
];
/* Restful Routes */
// FULL CRUD : Create[x], Read[x], Update[x], Destroy[x]
// Index : READ allows us to read a list of data from the database
app.get('/vegetables', (req, res) => {
    if(true){
        res.status(200).send(data)
    } else {
        res.status(404).send('Info not available')
    }
})
// New : CREATE display a form to the user that can accept data that we can transfer into our database
app.get('/vegetables/new', (req, res) => {
    res
      .status(200)
      .render('New');
})
// Delete : Destroy destroy an individual item from the database
app.delete('/vegetables/:id', (req, res) => {
    // filter out the item from the array and reassign the array
    // splic/slice remove from the list
    // index and nullify the object at that index 
})
// Update: Update  processes the data from the form on the edit page in order to prepare for delivery to the databse
// Create : CREATE processes the data from the form on the new page in order to prepare for delivery to the databse
// Edit: Update displays a form to the user that allows the user to change information already present in the databse
// Show: READ : Allows us to look at an individual resource from the database
app.get('*', (req, res) => {
 res.status(404).send('Sorry this is not the page your looking for')
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})