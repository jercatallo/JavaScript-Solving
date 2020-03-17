//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//Problem Link - https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript




function addBinary(a,b) {
    let sum = a + b;
    let remainderHolder = "",result = "",finalResult = "";
    

    while(sum >= 1){
        let i =0;
        remainderHolder = sum % 2;
        sum /= 2;
        result += Math.floor(remainderHolder);
        if(result.length == 4 ){
            result += " ";
        }
    }

    for(let i = result.length -1 ; i >= 0;i-- ){
        finalResult += result[i]
    }

    

    console.log(finalResult);
}



addBinary(100,100);