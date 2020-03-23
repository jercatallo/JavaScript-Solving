//Does my number look big in this?

//A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

//Problem Link - https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript



function quarantine(value) {
   var primes = [];
   for (var i = 2; i <= value; i++) {
      var prime = false;
      for (var j = 2; j<= i; j++) {
          if (i%j===0 && j!==i) {
              prime = true;
          }
      }
      if (prime === false) {
                 primes.push(i);
      }
  }
  for(let i =0; i< primes.length ;i++){
     for(let j=0; j<primes.length;j++){
        if((primes[i] + primes[j]) == value && primes[i] <= value /2 ){
         console.log(primes[i] + "+" + primes[j] + "=" + value )
      }
        }
     
  }

  }

 
 


 quarantine(100);