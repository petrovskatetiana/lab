
function ipToInt (ip = "127.0.0.1") {
    const arr = ip.split('.');
    const numbers = arr.map(Number);
    let ipNumber = 0;
    ipNumber = numbers.reduce((accumulator, currentValue) => (accumulator<<8) + currentValue, 0);
    console.log (ipNumber);
}
ipToInt ();