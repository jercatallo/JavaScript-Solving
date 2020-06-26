var isPalindrome = function(x) {
  var x = x.toString(),z= "";
  for(let i = x.length - 1;i>=0;i--){
    z += x[i]
  }
  return z == x ?  true : false
};




isPalindrome(1331);