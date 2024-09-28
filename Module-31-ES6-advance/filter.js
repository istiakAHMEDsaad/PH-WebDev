console.log('----------filter with condition----------\n');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const players = [75, 65, 67, 72, 55, 59];
const selectedPlayer = players.filter((selectHeight) => selectHeight >= 70);
console.log(`greate than equal 70: ${selectedPlayer}`);

const oddPlayers = players.filter((num) => num % 2 === 1);
console.log(oddPlayers);

const friendName = [
  'Rahim',
  'Karim',
  'Jabbar',
  'Sakina',
  'Shonali',
  'Jorina',
  'Kalam',
  'Dudu miya',
];
const filterName = friendName.filter((name) => name.length > 4);
console.log(`Name that containt 5 word or higher: ${filterName}`);