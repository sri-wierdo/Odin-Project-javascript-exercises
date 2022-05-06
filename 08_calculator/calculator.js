const add = function(num1 , num2) {
  let addition = num1+num2;
  return addition;
	
};

const subtract = function(num1 , num2) {
  let subtraction = num1-num2;
  return subtraction;
	
};

const sum = function(numberArray) {
  let sum = 0;
  for(let i =0 ; i < numberArray.length ; i++){
    sum = sum + numberArray[i];
    }
	return sum;
};

const multiply = function(numberArray) {
  let product = 1;
  for(let i =0 ; i < numberArray.length ; i++){
    product = product * numberArray[i];
  }
  return product;
};

const power = function(base , exponent) {
  return Math.pow(base , exponent)
	
};

const factorial = function(number) {
  let fact = 1
  if(number == 0){
    return 1;
  }else{
    for (let i = 1 ; i <= number ; i++){
      fact = fact*i;
    }
  }
  return fact;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
