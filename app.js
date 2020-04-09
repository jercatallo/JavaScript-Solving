//Break camelCase

//Problem Link - https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript



function solution(string) {
    var uppercasedString = string.toUpperCase();
    let breakName = "";

    for(let i =0;i<string.length;i++){
      breakName+= string[i];
      if(string[i + 1] == uppercasedString[i + 1]){
       breakName += " " ; 
      }
    }
return breakName.trim();
}


solution("jerCarloCatallo");





