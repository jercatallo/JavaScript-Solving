//IQ Test

//Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

//Problem Link - https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript



function iqTest(numbers){

let odd = 0, even = 0, oddPosition = "",evenPosition = "";
let num = numbers.split(" ");

    for(let i =0 ;i<num.length;i++){
        if(num[i] % 2 == 0){
           even++;
            evenPosition += i + 1;
        } else{
            odd++;  
            oddPosition += i + 1;
        }
    }

    
  
  
console.log((even < odd ? parseInt(evenPosition) :  parseInt(oddPosition))) ;

  }



  iqTest("1 2 1 1");