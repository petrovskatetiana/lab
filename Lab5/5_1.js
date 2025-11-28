function fun1(x) {
    return x + 7;
}

function fun2(x) {
    return x * 2;
}

let association = seq(fun1)(fun2)(5);

function seq(...args) {

    let arrayFunctions = [];
    for (const value of args) {
        if (typeof value === 'function') {
            arrayFunctions.push(value);
        }
    }

    function Comparison(acceptedValues) {
        if (typeof acceptedValues === 'function') {
            arrayFunctions.push(acceptedValues);
            return Comparison;
        } else if (typeof acceptedValues === 'number') {
            let result = acceptedValues;

            for (let i = arrayFunctions.length - 1; i >= 0; i--) {
                let currentFunction = arrayFunctions[i];
                result = currentFunction(result);
            }
            return result;
        }
    }

    return Comparison;
}

console.log(association);