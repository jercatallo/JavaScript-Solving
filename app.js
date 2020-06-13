var greet = function(name) {
var newName ="";

  for(let i=0; i<name.length;i++){
      if(i ==0){
        newName += name[i].toUpperCase();
      }else{
        newName += name[i];
      }
   
  }

  console.log("Hello" + newName +"!")
};


greet("billy")