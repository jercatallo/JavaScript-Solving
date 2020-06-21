function capitalize(s){
var capitalize = [];
var evenCap = "";
var oddCap = "";

  for(let i =0;i<s.length;i++){
    if(i % 2 == 0){
      evenCap += s[i].toUpperCase();
    }else{
      evenCap += s[i];
    }
  }

  for(let i =0;i<s.length;i++){
    if(i % 2 >= 1){
      oddCap += s[i].toUpperCase();
    }else{
      oddCap += s[i];
    }
  }

  capitalize.push(evenCap,oddCap);


   return capitalize;
};



capitalize("abcdef");