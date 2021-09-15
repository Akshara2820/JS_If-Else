const input=require("readline-sync");
const x1=input.questionInt("enter the no.--");
const x2=input.questionInt("enter the no--");
if (x1>x2){
    console.log("x1 is greater then x2")
}
else{
    console.log("x2 is greater then x1")
}