const USS = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
}
// Make class for alien ships with slightly different stats
class alienShip {
    constructor(hull, firepower, accuracy){
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 1;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
}
}





