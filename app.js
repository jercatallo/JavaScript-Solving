var addTwoNumbers = function(l1, l2) {
    
  var num1 = "";
  var num2 = "";

  

  for(let i = l1.length -1; i >=0;i--){
    num1 += l1[i];
  }

  for(let i = l2.length -1; i >=0;i--){
    num2 += l2[i];
  }

  var output = Number(num1) + Number(num2) + "";
  var final = [];

 
  for(let i = output.length -1; i >=0;i--){
  

    final.push(Number(output[i]));
  }
  

  return final;
  
};







addTwoNumbers([2,4,3],[5,6,4])