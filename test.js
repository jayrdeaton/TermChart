const TermChart = require('./'),
  cosmetic = require('cosmetic');

const randomNumber = () => parseFloat((Math.random() * 100).toFixed(2))

const termChart = new TermChart([
  { key: 'Alpha', value: randomNumber(), style: s => cosmetic.background.random(s) },
  { key: 'Bravo', value: randomNumber(), style: s => cosmetic.background.random(s) },
  { key: 'Charlie', value: randomNumber(), style: s => cosmetic.background.random(s) },
  { key: 'Delta', value: randomNumber(), style: s => cosmetic.background.random(s) },
  { key: 'Echo' },
  { key: 'Foxtrot', value: randomNumber(), character: '+', style: s => cosmetic.random(s) },
  { value: randomNumber(), style: s => cosmetic.background.random(s) },
  null,
]);

termChart.print();
