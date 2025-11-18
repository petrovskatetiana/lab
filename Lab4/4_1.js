const elements1 = sumFor();
const elements2 = sumForOf(6, 4, 7);
const elements3 = sumWhile(78, 90, 5);
const elements4 = sumDoWhile(0);
const elements5 = sumReduce(-1, -3);

function sumFor(...args) {
    let resaltFor = 0;
    for (let i = 0; i < args.length; i++) {
        resaltFor += args[i];
    }
    return resaltFor;
}

function sumForOf(...args) {
    let resaltForOf = 0;
    for (const value of args) {
        resaltForOf += value;
    }
    return (resaltForOf);
}

function sumWhile(...args) {
    let resaltWhile = 0;
    let i = 0;
    while (i < args.length) {
        resaltWhile += args[i];
        i++;
    }
    return (resaltWhile);
}

function sumDoWhile(...args) {
    let resaltDoWhile = 0;
    let i = 0;
    do {
        resaltDoWhile += args[i];
        i++;
    } while (i < args.length);
    return (resaltDoWhile);
}

function sumReduce(...args) {
    let resaltReduce = 0;
    return args.reduce((acc, val) => {
        return acc + val;
    }, 0)
}

console.log(elements1);
console.log(elements2);
console.log(elements3);
console.log(elements4);
console.log(elements5);