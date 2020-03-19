//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//Your task is to write a function maskify, which changes all but the last four characters into '#'.

//Problem Link - https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript



function maskify(cc) {
let mask= "";
let j = cc;
for(let i = 0; i <cc.length;i++){
    if(i<cc.length -4){
        mask += '#';
    } else{
        mask += j[i];
    }

}
    console.log(mask);
}


maskify('4556364607935616');