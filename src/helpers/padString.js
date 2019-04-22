const stringLength = require('./stringLength');

module.exports = (string, padding) => {
  while (stringLength(string) < padding) string += ' ';
  return string;
};
