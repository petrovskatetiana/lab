const max = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let maxValue = -Infinity;
for (const valueOunside of max) {
    for (const valueInside of valueOunside) {
        if (valueInside > maxValue) {
            maxValue = valueInside;
        }
    }
}
console.log(maxValue);