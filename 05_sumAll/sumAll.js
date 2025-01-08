const sumAll = function(a,b) {
    if(!Number.isInteger(a)||!Number.isInteger(b)){
        return 'ERROR';
    }
    if(a > b){
        let temp = b;
        b = a;
        a = temp;
    }
    if(a < 0){
        return 'ERROR';
    }
    return (a + b)*(b-a+1)/2;
};

// Do not edit below this line
module.exports = sumAll;
