//A square of squares

//You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
//However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

//Problem Link - https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript



var isSquare = function(n){
    if(Math.sqrt(n) % 2 == 0){
        return true;
    } else{
        return false
    }
  }


  console.log(isSquare(26))