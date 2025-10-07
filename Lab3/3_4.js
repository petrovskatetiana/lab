const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}
const arr = [];
for (const key in iface) {
    if (typeof iface[key] === 'function') {
        arr.push([key, iface[key].length])
    }
}