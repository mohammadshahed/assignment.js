function animalCount(dept){
    var animals = 0;
    for(i=0; i<=dept; i++){
        if(i<=10){
            var animals = dept*50;
        }
        else if(i>10 && i <=20){
            var animals =dept*100;
        }
    }
    return animals;

}
var result = animalCount(12);
console.log(result);


function animalCount(deep) {
  var animal = 0;
  for (var i = 1; i <= deep; i++) {
    if (i <= 10) {
      animal = animal + 50;
    } else if (i > 10 && i <= 20) {
      animal = animal + 100;
    } else if (i > 20 && i <= 35) {
      animal = animal + 300;
    }
  }
  return animal;
}
console.log(animalCount(15));