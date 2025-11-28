function array() {
    const all = [];

    function inside(index) {
        return arr[index];
    }

    inside.push = function (value) {
        arr.push(value);
    };

    inside.pop = function () {
        return arr.pop();
    };


    return inside;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2)); 