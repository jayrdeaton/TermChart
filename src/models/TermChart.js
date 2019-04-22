const cosmetic = require('cosmetic'),
  { padString, stringLength } = require('../helpers');

module.exports = class TermChart {
  constructor(data) {
    this.data = data;
    this.string = '';
    this.check();
    this.generate();
  };
  check() {
    if (!this.data instanceof Array) throw new Error('termchart data must be an array');
    for (const data of this.data) {
      if (!data) continue; //Allow for blank rows
      if (!data instanceof Object) throw new Error(`expected ${data} to be an object`);
    };
  };
  generate() {
    let maxKeyLength = 0;
    let maxValue = 0;
    let maxValueLength = 0;
    // get max values
    for (const data of this.data) {
      if (!data) continue;
      if (data.key && stringLength(data.key) > maxKeyLength) maxKeyLength = stringLength(data.key);
      if (data.value) {
        if (data.value > maxValue) maxValue = data.value;
        if (data.value.toString().length > maxValueLength) maxValueLength = data.value.toString().length;
      };
    };
    // get scale
    const scale = (process.stdout.columns - maxKeyLength - maxValueLength - 3) / maxValue;
    // generate string
    for (const data of this.data) {
      // create key label
      this.string += `${padString(data && data.key ? data.key : '', maxKeyLength)}|`;
      // create bar
      let bar = '';
      if (data && data.value) {
        for (let i = 0; i <= data.value * scale; i++) bar += data.character || ' ';
        // styleize bar
        bar = data.style ? data.style(bar) : data.character ? bar : cosmetic.background.white(bar);
        bar = `${bar} ${data.value}`;
      };
      // add bar to string with line break
      this.string += `${bar}\n`;
    };
  };
  print() {
    process.stdout.write(this.string);
  };
};
