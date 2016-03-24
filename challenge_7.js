// do work here
function PrimeFinder(){

  this.checkPrime = function(n){

    if(n <= 1){
      return false;
    }

    if(n === 2){
      return true;
    }

    if (n % 2 === 0){
      return false;
    }

    for (var i = 2; i < n; i++){
      if (n % i === 0){
        return false;
      }
    }

    return true;
  };

  this.getPrimeNumber = function(n){

    var count = 0;
    var number = 1;
    var prime;

    while(count < n) {

      if(this.checkPrime(number) === true){
        count++;

        prime = number;
      }

      number ++;
    }

    return prime;

  };

}

module.exports = PrimeFinder;

var newPF = new PrimeFinder();
console.log('newPF.getPrimeNumber(10001)', newPF.getPrimeNumber(10001));

