const input=require("readline-sync");
const x=input.questionInt("enter the number:-");
const y=input.questionInt("enter the no--");

if (x%y==0){
    console.log("divisible hai")
}
else{
    console.log("divisible nhi hai")
}