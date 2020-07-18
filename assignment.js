
// Feet to Mile
var valNum = 0.0;
function feetToMile(valNum){
    if(valNum * 0.000189394){
        var miles = valNum * 0.000189394;
        return miles;
    }
}
var result = feetToMile(2);
console.log(result);


//Wood Calculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1; //inqubec
    var tableCount = table * 3; //inqubec
    var bedCount = bed * 5; //inqubec
    var totalCountInQubec = chairCount + tableCount + bedCount;

    return totalCountInQubec;
}
var result = woodCalculator(12, 3, 6);
console.log(result);


//tinyFriends
function tinyFriend(names){
    var tinyName =names[0];
    for(var i=0; i<names.length; i++){
        var CurrentName = names[i];
        if(CurrentName.length < tinyName.length){
            tinyName = CurrentName;
        }
    }
    
    return tinyName;
}
    
    var tinyFriendsList = ['balam', 'rasell', 'ovi', 'abcdeg', 'mohammad'];
    
    console.log(tinyFriend(tinyFriendsList));


    //Brick Calculator
    // 1 feet = 1000 briks (from 1-10 floor) goes to 14 feet
    // 1 feet = 1000 briks (from 10-15 floor) it goes through 12 feet
    // 1 feet = 1000 briks (from 15-20 floor) it goes through 10 feet

    function brickCalculator(floor){
        var bricks = 0;
        if(floor <= 10){
            var bricks = floor * 14 * 1000;
        }
        else if(floor <= 15 ){
            var firstPartBricks = 10 * 14 * 1000;
            var remainingFeetBricks = floor - 10;
            var secondPartbricks = remainingFeetBricks * 12 * 1000;
            var bricks = firstPartBricks + secondPartbricks;
        }
        else{
            var firstPartBricks = 10 * 14 * 1000;
            var secondPartbricks = 15 * 12 * 1000;
            var remainingFeetBricks = floor - 15;
            var thirdPartBricks = remainingFeetBricks * 10 * 1000;
            var bricks = firstPartBricks + secondPartbricks + remainingFeetBricks;
        }

        return bricks;
    }

    var result = brickCalculator(2);
    console.log(result);