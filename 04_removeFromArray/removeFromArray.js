const removeFromArray = function(arr) {

let myArr = [];
for(let i  = 0; i < arr.length; i++){
    let work = 1;
    for(let j = 1; j < arguments.length;j++){
        if(arguments[j]===arr[i]){
            work = 0;
        }
    }
    if(work){
        myArr.push(arr[i]);
    }
}
return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
