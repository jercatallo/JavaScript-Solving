//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

//Problem Link - https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript


const binaryArrayToNumber = arr => {

 let holder  = "";


 arr.forEach(binary => {
     holder += binary;
 });

return parseInt(holder,2);

};


binaryArrayToNumber([1,1,1,1])