const sumAll = function(num1 , num2) {
    let sumAll = 0;
    if(num1 > 0 && num2 > 0 && typeof num1 === "number" && typeof num2 === "number"){
    if(num1 < num2){
    for(let i = num1 ; i<= num2 ; i++){
        sumAll = sumAll+i;
        }
    }
    else if(num1 > num2){
        for(let i = num2 ; i<= num1 ; i++){
            sumAll = sumAll+i;
            }

    }

    return sumAll
}
else{return "ERROR";}
    

};

// Do not edit below this line
module.exports = sumAll;
