const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);

function difference(array1, array2) {
    const result = [];

    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            result.push(array1[i]);
        }
    }

    return result;
}