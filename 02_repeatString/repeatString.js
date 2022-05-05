const repeatString = function(string , num) {
    let tmp = "" 
    if(num<0) {return 'ERROR'}
    for(let i = 0; i<num ; i++){
        tmp = tmp+string;
    }
    return tmp

};

// Do not edit below this line
module.exports = repeatString;
