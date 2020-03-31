//Good vs Evil

//Problem Link - https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript


//Good side:
//Hobbits: 1
//Men: 2
//Elves: 3
//Dwarves: 3
//Eagles: 4
//Wizards: 10

//On the side of evil we have:
//Orcs: 1
//Men: 2
//Wargs: 2
//Goblins: 2
//Uruk Hai: 3
//Trolls: 5
//Wizards: 10



function goodVsEvil(good, evil){

  let goods = good.split(" "), evils = evil.split(" ");
  let goodCount = 0, evilCount = 0, result = "";
  let  goodLength = good.length, evilLength = evil.length;


 
//Good
// 0 1 2 3 4 5 
// 1 2 3 3 4 10

for(let i =0; i<goodLength;i++){
  if(goods[i] >= 1){
    switch(i){
      case 0:
      goodCount += 1 * goods[i];
      break;
      case 1:
        goodCount += 2 * goods[i];
      break;
      case 2:
        goodCount += 3 * goods[i];
      break;
      case 3:
        goodCount += 3 * goods[i];
      break;
      case 4:
        goodCount += 4 * goods[i];
      break;
      case 5:
        goodCount += 10 * goods[i];
      break;
    }
   
  } else{
    continue;
  }

}

//Evil
// 0 1 2 3 4 5 6
// 1 2 2 2 3 5 10

for(let i =0; i<evilLength;i++){

  if(evils[i] >= 1){
    switch(i){
      case 0:
      evilCount += 1 * evils[i];
      break;
      case 1:
      evilCount += 2 * evils[i];
      break;
      case 2:
      evilCount += 2* evils[i];
      break;
      case 3:
      evilCount += 2 * evils[i];
      break;
      case 4:
      evilCount += 3 * evils[i];
      break;
      case 5:
      evilCount += 5 * evils[i];
      break;
      case 6:
      evilCount += 10 * evils[i];
      break;
    }
   
  } else{
    continue;
  }

}

if(goodCount > evilCount){
  result += "Battle Result: Good triumphs over Evil";
} else if(evilCount > goodCount){
  result += "Battle Result: Evil eradicates all trace of Good" ;
}else if(goodCount === evilCount) {
  result += "Battle Result: No victor on this battle field";
}

console.log(goodCount);
console.log(evilCount);

}


goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1");