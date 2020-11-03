///Things that will chhange throughtout the game

let tool;
let money;
let cost;
let amountEarned;
let days;




///Things that will stay the same throughout the game

const tools = {
    teeth: ['your teeth', 1, 1],
    rustyScissors: ['a pair of rusty scissors', 0, 5],
    oldTimey: ['an old-timey push lawnmower', 0, 50],
    fancyBattery: ['a fancy batte-powered lawnmower', 0, 250],
    starvingStudents: ['a team of starving students', 0, 500],
}





///Winning Money Value

const winningMoney = 1000;



/// Winning Function

const winFunction = function () {
    if(tools.starvingStudents[0] >=  1 && money >= 1000) {
        document.getElementById("gameText").innerHTML = 'Congratulations, you have won the game!'
    }else {
        prompt('You need a total of $1000 and a team of starving students')
        alert(money + tools.starvingStudents)
    }
}

 /// Cutting Function

 const cutting = function() {
     if(tools.starvingStudents[0] >= 1 && money >= 1000) {
         return winFunction();
     } else cuttingPower = (tools.teeth[1] * tools.teeth[2]) +
     (tools.rustyScissors[1] * tools.rustyScissors[2]) +
     (tools.oldTimey[1] * tools.oldTimey[2]) +
     (tools.fancyBattery[1] * tools.fancyBattery[2]) +
     (tools.starvingStudents[1] * tools.starvingStudents[2]);
     {money = money + cutting,
        alert(money),
        alert(tools)
     }
 }

/// Buying rusty scissors function

const buyScissors = function() {
    if (money >= 5) {
        tools.rustyScissors[1] = tools.rustyScissors[1] + 1,
        money = money - 5, 
        alert("You just bought a pair of rusty old scissors!")
        alert("You now have $" + money)
    } else {
        alert(money)
        prompt("you don't have enough to purchase the rusty old scissors yet!")
    }
}



/// Buying push lawnmower

const buyOldTimey = function() {
    if (money >= 25 && tools.rustyScissors[1] >= 1) {
        tools.oldTimey[1] = tools.oldTimey[1] + 1,
        money = money - 25, 
        alert("You just bought a old push mower!")
        alert(money)
    } else {
        prompt("you don't have the prerequisites to buy the old-timey push mower yet! You need $25 and a pair of rusty scissors!")
        alert("You now have $" + money)
        alert(tools.rustyScissors)
    }
}


/// Buying Fancy powered lawnmower

const buyFancyMower = function() {
    if (money >= 250 && tools.oldTimey[1] >= 1) {
        tools.fancyBattery[1] = tools.fancyBattery[1] + 1,
        money = money - 250, 
        alert("You just bought a fancy lawnmower!")
        alert("You now have $" + money)
    } else {
        prompt("you don't have the prerequisites to buy the fancy lawnmower yet! You need $250 and an old-timey push lawnmower!")
        alert(money)
        alert(tools.oldTimey)
    }
}



/// Buying a team of starving students

const buyStravingStudents = function() {
    if (money >= 500 && tools.fancyBattery[1] >= 1) {
        tools.starvingStudents[1] = tools.starvingStudents[1] + 1,
        money = money - 500, 
        alert("You just bought help from starving students!")
        alert("You now have $" + money)
    } else {
        prompt("you don't have the prerequisites to get help from the team of starving students yet! You need $500 and a fancy lawnmower!")
        alert(money)
        alert(tools.fancyBattery)
    }
}