
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
    function brickCalculator(feet){
        var feet[0] = 1;
        if(i = 1; i < 11; i++){
            var brick = feet[i] * 1000;
        }
        else if {
            
        }
        return brick;
    }

    var result = brickCalculator(15);
    console.log(result);