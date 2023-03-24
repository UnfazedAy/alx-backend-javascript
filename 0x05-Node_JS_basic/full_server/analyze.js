const games = {
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let value = 0;
let countNumbers = 0;

Object.values(games.odds).forEach((numbers) => {
  value += (numbers);
  countNumbers += 1;
});

const result = value / countNumbers;
console.log(result.toFixed(2));
