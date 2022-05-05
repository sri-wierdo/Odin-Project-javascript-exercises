const ftoc = function(f) {
  return  Math.round((((f-32)*5)/9)*10)/10; // formula to conver farhenhiet to celcius is C = (F-32)*5/9  and then to get the value to one decimal point using math.round (number*10)/10

};

const ctof = function(c) {
  return Math.round(((c*9/5)+32)*10)/10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
