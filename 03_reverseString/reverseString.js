const reverseString = function(str) {
    let rev = '';
    for(let cur = str.length-1; cur >=0 ; cur--){
        rev = rev + str[cur];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
