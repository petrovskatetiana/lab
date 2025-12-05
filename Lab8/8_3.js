const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);

function contract(fn, ...types) {
    return function (...args) {

        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            const def = types[i];
            const name = def.name.toLowerCase();

            if (typeof arg !== name) {
                throw new TypeError("...");
            }
        }

        const res = fn(...args);

        const def = types[types.length - 1];
        const name = def.name.toLowerCase();

        if (typeof res !== name) {
            throw new TypeError("...");
        }

        return res;
    };
}