function htmlColorNames(arr) {
  let newColors = ['DarkSalmon', 'BlanchedAlmond'];
  arr.splice(0, 2, newColors[0], newColors[1]);
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));