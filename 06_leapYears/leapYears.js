const leapYears = function(year) {
    console.log(typeof year)
    if(year % 4 == 0 && typeof year === "number" ){
        if(year %100 == 0 && year % 400 != 0){
            return false;
        } else return true;
    }else return false;
};

leapYears(2000)
// Do not edit below this line
module.exports = leapYears;
