function pipe(...fns) {
    for (let i = 0; i < fns.length; i++) {
        if (typeof fns[i] !== "function") {
            throw new Error("Error");
        }
    }
    function accept(x) {
        return fns.reduce((acc, fn) => fn(acc), x);
    }
    return accept;

}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const f = pipe(inc, twice, cube);
const x = f(5);
console.log(x);