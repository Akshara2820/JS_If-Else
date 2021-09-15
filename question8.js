const input=require("readline-sync");
const num=input.questionInt("enter the no--");

if (num<1){
    console.log("water is less need to fill water")
}
else if(num>=1 && num<=10){
    console.log("there is no need to fill water")
}
else{
    console.log("water is overflow")
}