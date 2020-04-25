//Data Structure
//Find pair with given sum in the array



var arr = [8,7,2,5,3,1];
var sum = 10;

//Set the checker to false
var checkPair = false;


for(let i =0; i<arr.length;i++){


    for(let j =0; j<arr.length/2;j++){
        //To not include the same integer itself in the process
        if(i != j){
             //Takes all the integer starting from i = 0 to j = 0...5 and adds it
        if(arr[i] + arr[j] == sum){
            //Display the pair that equals to sum
            console.log("Pair found at index " + i + " and " + j + "("+arr[i] +" + " +arr[j]+")");
            //Changing the value of checkPair to true because it passes the conditional statement above that checks if the integer[i] + integer[j] == sum
            checkPair = true;
        }
    }
    }
}

//Display if their is no pair
if(checkPair == false){
    console.log("There is no pair");
}