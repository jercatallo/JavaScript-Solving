var removeElement = function(nums, val) {

    var newArr = nums.filter((value) =>{
        return value != val;
    })
    
   return newArr;
};






console.log(removeElement([3,2,2,3],3))