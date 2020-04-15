//Validate my Password

//Problem Link -  https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript


function validPass(password){

  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let containNumber = false;
  let containLetter = false;
  let containSpecialcharacters = format.test(password);
  let check = "";

//Check if it contains special character
  if(containSpecialcharacters == false){
    if(password.length > 3 && password.length <20){
      //Check if it contains Numbers and Letters
      for(let i = 0;i<password.length;i++){
        //Check if it is a number
        if(!(isNaN(Number(password[i])))){
          containNumber = true;
        //Check if it is a letter or string
        }else if(typeof password[i] == "string"){
          containLetter = true;
        } 
      }
  (containNumber == true && containLetter == true ?  check += "VALID" : check += "INVALID")
    }else{
      check += "INVALID";
    }
  }else{
    check += "INVALID";
  }

  return check;
}


validPass("jer4")