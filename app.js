//Triangle Pattern

//Problem Link - 


let count = 0;
let space = "&nbsp";
let kam = 0;



for(let i =1; i<=9;i++){

  for(let j=0;j<i;j++){

    for(let z= 9;z >i;z--){
      if(j % 2 == 0 && j < 2){
        document.write(space);
      }
    }

   document.write(count += 1);
   

   
   






   
   if(count == 9){
    count = 0;
  }
  }



  document.write("<br>")
 
}
