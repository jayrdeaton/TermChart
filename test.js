const TermChart = require('./'),
  cosmetic = require('cosmetic');

const termChart = new TermChart([
  { key: 'Alpha', value: 20, character: '-' },
  { key: 'Bravo', value: 30 , style: s => cosmetic.background.red(s) },
  null,
  { key: 'Charlie', value: 50, character: '+', style: s => cosmetic.green(s) },
  { key: 'Delta' },
  { value: 25 },
  { key: 'Echo', value: 60 }
]);

termChart.print();
