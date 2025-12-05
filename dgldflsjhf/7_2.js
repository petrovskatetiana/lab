const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 7);
console.log(array);

function removeElements(array, ...items) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let value of items) {
            if (array[i] === value) {
                array.splice(i, 1);
                break;
            }

        }

    }
}