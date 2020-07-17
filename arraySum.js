var numbers = [45, 34, 67, 12, 5, 7, 87];

function getArraySum(numbers){
    var sum = 0;

    for(var i=0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var result = getArraySum(numbers)

console.log("Total of numbers: ", result);
