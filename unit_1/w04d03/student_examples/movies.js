class Movies {
    constructor(title, lead, genre, rating, length){
        this.title = title
        this.lead = lead
        this.genre = genre
        this.rating = rating
        this.length = length
    }
    playMovie() {
        console.log(`You are now watching ${this.title}`)
    }
    addQueue() {
        console.log(`${this.movie} has now been added to your queue list`)
    }
    changeLead(replacement) {
        this.lead = replacement;
        console.log(`${this.title}'s lead has been changed to ${replacement}`);
    }
    deletedScene(minutes) {
        this.length -= minutes;
        console.log(`${this.title} is now ${this.length} minutes`);
    }
}
const starWars = new Movies('A New Hope', 'Mark Hamill', 'SciFi', 'PG', 180);
console.log(starWars);
starWars.deletedScene(30);