
//animal Dept Calculator 
// every dept is counted in miles
// 0-10 miles taken 50 animals/mile
// 11-20 miles taken 100 animals/mile
//20-infinite taken 400 animals/mile as you choose

function animalDeptCalculator(dept){
    var animal = 0;
    if(dept <= 10){
        var animals = dept * 50;
    }
    else if(dept <=20){
        var firstPartAnimals = 10*50;
        var remainingPartAnimals = dept - 10;
        var secondPartanimals = remainingPartAnimals*100;
        var animals =firstPartAnimals + secondPartanimals;
    }
    else{
        var firstPartAnimals = 10*50;
        var secondPartanimals = 10*100;
        var remainingPartAnimals = dept - 20;
        var thirdPartAnimals = remainingPartAnimals*300;
        var animals = firstPartAnimals + secondPartanimals + thirdPartAnimals;
    }

    return animals;
}

var totalAnimalsCount = animalDeptCalculator(12);
console.log(totalAnimalsCount)