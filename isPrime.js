
function isPrime(n){
    for(i=2; i<n-1; i++){
        if (n%i == 0){
            return "Not A Prime";
        }
     }
    return "Your Number is Prime";
}

var result = isPrime(81);
console.log(result);