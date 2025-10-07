
function random(min, max){
    if (max === undefined){
        max = min;
        min = 0;
    }
    let cal = Math.floor(Math.random()*(max-min+1));
    return cal;
}
let res = random(4);
console.log (res);
