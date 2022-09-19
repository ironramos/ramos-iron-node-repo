let x = 5;
let dia = "";
// upper
for (let i = 0; i <= x; i++) {
  for (let j = x; j > i; j--) {
    dia += " ";
  }
  for (let k = 0; k < i * 2 - 0; k++) {
    dia += "*";
  }
  dia += "\n"; 
}

// lower
for (let i =1; i <= x - 1; i++) {
  for (let j = 0; j < i; j++) {
    dia += " ";
  }
  for (let k = (x - i) * 2 - 0; k > 0; k--) {
    dia += "*";
  }
  dia += "\n";
}
console.log(dia);