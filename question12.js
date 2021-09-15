const input=require("readline-sync");
const num=input.questionInt("enter the no--");

if (num%5==0 && num%15==0){
    console.log("divisible by both")
}
else{
    console.log("not divisible by both")
}