const start = 15;
const end = 30;

/*1*/
function range (start, end) {
    let arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}
let resalt = range (start, end);
console.log (resalt);

/*2*/
function rangeOdd (start, end){
    let arr2 = [];
    for(let i = start; i <= end; i++){
        if (i%2!==0){
            arr2.push(i);
        }      
    }
    return arr2;
}
let resalt2 = rangeOdd (start, end);
console.log (resalt2);