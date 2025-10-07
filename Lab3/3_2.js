
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters){
 let key = '';

 for (let i = 0; i < length; i++){
    const random = Math.floor(Math.random() * characters.length);
    key += characters[random];

 }
 return key;
}
let res = generateKey(76, characters);
console.log (res);