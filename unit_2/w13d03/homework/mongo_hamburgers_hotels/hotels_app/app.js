// C
// Create 13 hotels in the database
/* db.seed.insertOne(
    {
        "name": "Hotel 1",
        "location": "California",
        "rating": 5,
        "vacancies": false,
        "rooms": [
          {
            "roomNumber": 1,
            "size": "California King",
            "price": 10000000,
            "booked": true
          },
)*/
/* db.seed.insertOne(
        {
        "name": "Hotel 2",
        "location": "California",
        "rating": 5,
        "vacancies": false,
        "rooms": [
          {
            "roomNumber": 2,
            "size": "California King",
            "price": 10000000,
            "booked": true
          },
)*/
// I WOULD JUST DO THIS 13 TIMES

// R
// db.seed.find()

// U
db.seed.updateOne(
    { name: "Great Northern"},
    { 
        $rating: 5 
    }
)

// D
db.seed.deleteOne({ name: "Colorado Rockies" })
db.seed.deleteOne({ name: "Hilbert's Hotel" })