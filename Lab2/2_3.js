
/* 1 */
function average(a, b){
    return (a+b)/2;
     
}

/* 2 */
function square (x){
    return x*x;
}

/* 3 */
function cube (x) {
    return x*x*x;
}

/*4*/
function calculate (){
    let arr = [];

    for (let i=0; i<=9; i ++) {
    let cuR = cube (i);
    let sqR = square (i);
    let avR = average(cuR, sqR);
    arr.push(avR);
}
return arr;
}

let arrR = calculate ();
console.log (arrR);