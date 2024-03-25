const showRoom = [
  { id: 1, name: 'Renault', model: 'Captur' },
  { id: 1, name: 'Toyota', model: 'Yaris' },
  { id: 1, name: 'BMW', model: 'M1' },
  { id: 1, name: 'Peugeot', model: '206' },
  { id: 1, name: 'Ferrari', model: 'F430' },
];

// 1️⃣ FOR LOOP

for (let i = 0; i < showRoom.length; i++) {
  console.table(showRoom[i].name);
}

// 2️⃣ FOR EACH

showRoom.forEach(function (item, index, showRoom) {
  console.log(`Name: ${item.name} Model: ${item.model}`);
});

// 3️⃣ FOR/OFF LOOP

for (let item of showRoom) {
  console.log(item.name);
}

// 4️⃣ WHILE

let i = 0;
while (i < showRoom.length) {
  console.log(showRoom[i].name);
  i++;
}

// 5️⃣ DO WHILE

let j = 0;
do {
  console.log(showRoom[j].name);
  j++;
} while (j < showRoom.length);

// 6️⃣ MAP

console.time('MAP');

let car = showRoom.map(showRoom => showRoom.name);
console.log(car);

console.timeEnd('MAP');
