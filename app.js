//Rot13

//Problem Link - https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function rot13(message){

  var rot13 = "";

  for(let i =0; i<message.length;i++){


    for(let j = 0; j<letters.length ;j++){
      var holder = 0;
      if(message[i] == " " || Number.isInteger(Number(message[i])) || message[i] == "+" || message[i] == "." || message[i] == "!"){
        rot13 += message[i];
        break;
      }
     
      if(message[i].toLowerCase() == letters[j].toLowerCase() ){
        var pos = letters.indexOf(letters[j])
      
      if((pos + 13) >= 26 ){
        holder += (pos + 13) - 26;
      }else{
        holder += pos + 13;
      }

      if(message[i] == letters[j]){
        rot13 += letters[holder].toUpperCase();
      }else{
        rot13 += letters[holder].toLowerCase();
      }
     
      holder = 0 ;
      } 
    }
  }

 console.log(rot13);

}


rot13("10+2 is twelve.");





