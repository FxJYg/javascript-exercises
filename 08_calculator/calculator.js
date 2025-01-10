const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
  return arr.reduce((cur,element)=> element+cur,0);
};

const multiply = function(arr) {
  return arr.reduce((cur,element)=>cur*element,1);
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(n) {
  let ans = 1;
  for(let i = 2; i <= n; i++){
    ans *= i;
  }
  return ans;
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
