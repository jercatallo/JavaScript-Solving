//Does my number look big in this?

//A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

//Problem Link - https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript



function narcissistic(value) {
let sum = 0;

    for(let i =0; i< value.toString().length;i++){
       sum += Math.pow(parseInt(value.toString()[i]),value.toString().length);
    }

   return (sum === value ? true : false);
 
  }


 



  narcissistic(1634);