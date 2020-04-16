//Validate my Password

//Problem Link -  https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript


function palindromes(string){
var str = string;
var newWord = "";
  var palindrome = [];
  var reversePalindrome = [];
  var allReversePalindrome = [];
  var allAllPalindrome = [];
  var final = [];

  //function to reverse a string
  function reverses(str){
    let reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
  }

for(let c = 0; c< string.length;c++){

  for(let i = 0;i<str.length;i++){
    newWord += str[i]
    palindrome.push(newWord);
  }

  for(let i = 0; i<palindrome.length;i++){
    var reverseWord = "";

    for(let j = 0; j < i +1;j++){
        //to get the word in array element
        reverseWord += palindrome[i][j];
    }

    //to push the reverse word to new array
   reversePalindrome.push(reverses(reverseWord));

   //to set to default the word getters
    reverseWord = "";
  }

  newWord = "";
  str = str.substring(1,str.length)
  
  allReversePalindrome.push(reversePalindrome);
  allAllPalindrome.push(palindrome);

  palindrome = [];
  reversePalindrome = [];

}

for(let i = 0; i<allAllPalindrome.length;i++){

  for(let j = 0 ;j < allAllPalindrome[i].length;j++){
//To check if the counterpart array which is the reverse aray is the same string 
      if(allAllPalindrome[i][j] == allReversePalindrome[i][j]){
        //To remove from the choice that are only 1 character
        if(allAllPalindrome[i][j].length > 1){
          final.push(allAllPalindrome[i][j]);
        }
       
      }
      
  }
}

document.write("list of palindromes in a string:" + "<br>")
final.forEach(palindrome => {
  document.write(palindrome + "<br>")
})


}
  
  
  palindromes("racecar");