var marks = [23, 45, 42, 348, 75, 84, 63];
var max = marks[0];

for(i=0; i<marks.length; i++){
    var element = marks[i]; 
    if(element > max){
        max = element;
    }
}
console.log(max);