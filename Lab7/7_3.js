const result = unique([2, 1, 1, 3, 2]);
console.log(result);

function unique(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}
