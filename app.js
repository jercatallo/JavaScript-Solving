//Human Readable Time

//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//Problem Link - https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript


function humanReadable(seconds) {
    let SS = 0, MM = 0, HH = 0;
   
     if(seconds % 2 == 0 || seconds % 2 != 0){
         //Code for seconds
         if(seconds % 2 != 0 &&seconds>= 59){
             SS = 59;
         }
            //If seconds is divided by 2 and no reminder
         else if(seconds % 2 == 0){
             //If seconds is greater than 59
             if(seconds > 59){
                 //If it is greater than 59 it will be divided to 60 and return the remainder
                 if(seconds % 60 == 0){
                    SS = '0' + seconds % 60;
                 }else{
                    SS = seconds % 60;
                 }
             }
                //if seconds is less than 60
             if(seconds < 60 ){
                SS = '0' + seconds % 60;
                //To put zero if it is only 1 digit
                 if(seconds < 10){
                    SS = '0' + seconds % 60;
                 } 
                //If less than 60 display the corresponding seconds
                 else{
                    SS = seconds % 60;
                 }
             }
            
         } else if(seconds <= 59){
             SS = '0' + seconds;
         } 
       //Code for Minutes
         if(seconds / 60 > 59){
          if(seconds % 2 != 0 &&seconds >= 59){
             MM = 59;
         }
         //If seconds is divided by 2 and no reminder
         else if(seconds % 2 == 0){
               //if Minutes is greater than 60
            if(seconds / 60 > 59){
                if((seconds / 60) % 60 == 0){
                   MM = '0' + (seconds / 60) % 60;
                }else{
                   MM = Math.floor((seconds / 60) % 60);
                }
             
            }
            //if Minutes is less than 60
            if(seconds / 60 < 60 ){
              MM = '0' + (seconds / 60) % 60;
                 //To put zero if it is only 1 digit
                if(seconds < 10){
                   MM = '0' + (seconds / 60) % 60;
                } 
                //If less than 60 display the corresponding minutes
                else{
                  MM = Math.floor((seconds / 60) % 60);
                }
            
            }
         } else if(seconds < 59){
            MM = '0' + seconds;
         }
 
         } else{
             MM = "0"+  Math.floor(seconds / 60);
         }
         //Code for Hours
         if(Math.floor((seconds / 60) / 60) < 9){
             HH = "0" + Math.floor((seconds / 60) / 60);
         }else{
             HH = Math.floor((seconds / 60) / 60);
         }
    
     } 
 

   console.log(HH + ":" + MM + ":" + SS  ) 

  }

  humanReadable(45296);