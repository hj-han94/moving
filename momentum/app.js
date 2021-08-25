const age =parseInt(prompt("how old are you?"));


console.log(typeof age);
console.log(isNaN(age));
console.log(age);



if(isNaN(age)){
    console.log("please write number");
}else if (age>=18 && age<=50){
    console.log("you can drink");
}else if( age >50 && age<=80){
    console.log("you have to exercise");
}else{
    console.log("you do whatever you want");
}
