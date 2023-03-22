const lists = [
  ['Johann', 'Kerbrou', '30', 'CS'],
  ['Guillaume', 'Salou', '30', 'SWE'],
  ['Arielle', 'Salou', '20', 'CS'],
  ['Jonathan', 'Benou', '30', 'CS'],
  ['Emmanuel', 'Turlou', '40', 'CS'],
  ['Guillaume', 'Plessous', '35', 'CS'],
  ['Joseph', 'Crisou', '34', 'SWE'],
  ['Paul', 'Schneider', '60', 'SWE'],
  ['Tommy', 'Schoul', '32', 'SWE'],
  ['Katie', 'Shirou', '21', 'CS'],
];

const fields = new Set();

lists.forEach((list) => {
  fields.add(list.slice(-1)[0]);
});

console.log(fields);
