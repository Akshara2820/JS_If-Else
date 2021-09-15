const input=require("readline-sync");
const num=input.questionInt("enter num--");
if (num<10){
    console.log("num is less then 10")
}
else if (num>10 && num<20){
    console.log("num is less than 20")
}

else{
    console.log("num is grether then 20")
}
