
const palindromes = function (str) {
    const newStr = str.split('').filter(char => /[a-zA-Z0-9]/.test(char)).join('').toLowerCase();
    const len = newStr.length-1;
    for(let i = 0; i < len/2; i++){
        if(newStr[i]!==newStr[len-i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
