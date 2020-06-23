var twoSum = function(nums, target) {
    targets = 9;
    numss = [2, 7, 11, 15];

    for(let i =0; i<numss.length;i++){
     
      for (let j = 0; j<numss.length ;j++){
        if(i != j){
        if(numss[i] + numss[j] == targets){
          console.log([i,j]);
        }
      }
      }
    }
    
};



twoSum();