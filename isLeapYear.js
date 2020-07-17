var year = "";
function isLeapYear(year){
    if((year % 4 === 0 && year % 100 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return'yes this is a leap year';
        }
    else {
        return "it's not a leap year";
    }
        
}
console.log(isLeapYear(2029));