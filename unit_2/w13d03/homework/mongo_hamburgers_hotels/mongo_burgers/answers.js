const { Mongoose } = require("mongoose");

const burgerSchema = new Mongoose.Schema({
    meat: {type: String, required: true},
    prefMeat: {type: String, required: true},
    cheese: {type: true, required: true},
    hasVegetables: Boolean,
    vegetables: [String],
    condiments: [String]
})

const Burgers = mongoose.model('Burgers', burgerSchema);

// create 5 burgers (at least 3 should be beef)
    // Burgers.create({
    //     meat: "beef",
    //     prefMeat: "well done",
    //     cheese: true,
    //     hasVegetables: true,
    //     vegetables: ['lettuce', 'grilledOnion'],
    //     condiments: ['ketchup', 'mayonaise']
    // }, (err, createdBurger) => {
    //     if(!err){
    //         console.log(createdBurger)
    //     } else{
    //         console.error(err)
    //     }
    // })


// find all the burgers
// Burgers.find({}, (err, foundBurgers) => {
//     if(!err){
//         console.log(foundBurgers);
//     }else{
//         console.error(err)
//     }
// })


// show just one burger 
// Burgers.findById({ _id:}, (err, foundBurger) => {
//     if(!err) {
//         console.log(foundBurger);
//     }else {
//         console.error(err);
//     }
// })

// update just the toppings of one burger
// Burgers.findByIdAndUpdate({
//     _id:},
//     {vegetables: ["peppers", "avacado"]},
//     {new: true},
//     (err, updatedBurger) => {
//         if(!err){
//             console.log(updatedBurger);
//         } else {
//             console.error(err);
//         }
//     })


// delete one of your burgers
// Burgers.findByIdAndDelete({_id:}, (err, deletedBurger) => {
//     if(!err){
//         console.log(deletedBurger);
//     }else {
//         console.error(err);
//     }
// })
