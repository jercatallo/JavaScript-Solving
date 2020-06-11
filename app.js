let input = "<hr><br>Save<br>";

let hr ="hr";
let br ="br";



for(let i = 0; i< input.length;i++){
    for(let j = 0;j< 4;j++){
        let placeholder = "";
        placeholder += input[j]
       console.log(placeholder)
        if( placeholder != "<hr>" || placeholder != "<br>"){

            placeholder = "";
        }
       
    }
}




