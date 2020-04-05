//Simple Pig Latin

//Problem Link - https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){

  //Takes the Word
  var word = str.split(" ");
  //Piglatin Outcome
  var pigLatin = [];
  //Extension Word
  const extensionWord = "ay";

  for(let i= 0;i <word.length;i++){
    let newWord = "";
    let placeholder = "";

    for(let j =0; j <word[i].length ;j++){
      //to takes the letters in the word except the first word
      if(j != word[i].length - 1){
        newWord += word[i][j + 1];
      }
      

      if(j == word[i].length - 1){
        //to take the first letter of the word in a array
        placeholder += word[i][0];
        //Leave punctuation marks untouched
        if(word[i][j] != "!" && word[i][j] != "?"){
          //to add letters in the word except the first word + first letter of the word in a array + "ay"
          pigLatin.push(newWord + placeholder + extensionWord) 
        }else{
          //to add letters in the word except the first word + first letter of the word in a array
          pigLatin.push(newWord + placeholder) 
        }
      }
    }
  }

  //to converts piglatin to full string
  var final = pigLatin.join(" ");
  
  return final;

}


pigIt('This is my string !')