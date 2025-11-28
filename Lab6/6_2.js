function pipe(...fns) {

    for (let i = 0; i < fns.length; i++) {
        if (typeof fns[i] !== 'function') {
            throw new Error('Error');
        }
    }
    const error = [];
    function f(x) {

        let value = x;
        for (let i = fns.length - 1; i >= 0; i--) {
            try {
                value = fns[i](value);
            } catch (g) {
                for (let j = 0; j < error.length; j++) {
                    error[j](g);
                }
                return undefined;
            }
        }
        return value;
    }

    f.on = function (event, handler) {
        if (event === 'error') {
            error.push(handler);
        }
        return f;
    };

    return f;

}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const f = pipe(inc, twice, cube);
const x = f(5);
console.log(x);


