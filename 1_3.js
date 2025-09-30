const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 3.14, 'JS', true, 0, null, undefined,]
const name = {};

for (const item of arr){

    const type = typeof item;
    if (name[type]) {
    name[type]++;

} else {
    name[type] = 1; 
}
    
}
console.dir(name);