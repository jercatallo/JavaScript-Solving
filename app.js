// function palindromes(string){

//   var newWord = "";
//   var palindrome = [];
//   var reversePalindrome = [];
//   var allPalindrome = [];


//   for(let i = 0;i<string.length;i++){
//     newWord += string[i]
//     palindrome.push(newWord);
//   }


//   for(let i = 0; i<palindrome.length;i++){
//     var reverseWord = "";
//     var reverse = "";

//     for(let j = 0; j < i +1;j++){
//         //to get the word in array element
//         reverseWord += palindrome[i][j];
//     }

    
//     for(let z = reverseWord.length -1; z >=0; z--){
//       //to reverse the wordin array element
//       reverse += reverseWord[z];
//     }

//     //to push the reverse word to new array
//    reversePalindrome.push(reverse);


//    //to set to default the word getters
//     reverse = "";
//     reverseWord = "";
//   }

//   for(let i = 1; i<palindrome.length;i++){
//     if(palindrome[i] == reversePalindrome[i]){
//       allPalindrome.push(palindrome[i]);
//     }
//   }

//   document.write(allPalindrome)
//   console.log(palindrome)
//   console.log(reversePalindrome)
// }




// palindromes("abaaabaa ");