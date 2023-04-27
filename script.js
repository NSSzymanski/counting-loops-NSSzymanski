for (i = 1; i <= 10; i++) {
  console.log(i);
}

for (i = 10; i >= 1; i--) {
  console.log(i);
}

let count = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

do {
  console.log(count);
  count = count + 1;
} while (count <= 10);

let oneThruTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let counting of oneThruTen) {
  console.log(counting);
}
