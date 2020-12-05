class Team {
    constructor(name, $el){
        this.name = name;
        this.score = 0;
        this.$el = $el;
    }
    increaseScore(pointValue){
        this.score += pointValue;
    }
    decreaseScore(pointValue){
        this.score -= pointValue;
    }
}
$(()=>{
    const team1 = new Team('team1', $('#team1'));
    const team2 = new Team('team2', $('#team2'));
    const team3 = new Team('team3', $('#team3'));
    console.log(team1.$el)
})