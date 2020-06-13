function largestPairSum(numbers)
{
  var num = numbers.sort(function(a,b){return a-b});
  console.log(num)
 
    console.log(num[num.length-1] + num[num.length-2])
  


}




largestPairSum([-10, -14, -2, -23, -19])