
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1; //inqubec
    var tableCount = table * 3; //inqubec
    var bedCount = bed * 5; //inqubec
    var totalCountInQubec = chairCount + tableCount + bedCount;

    return totalCountInQubec;
}
var result = woodCalculator(12, 3, 6);
console.log(result);
