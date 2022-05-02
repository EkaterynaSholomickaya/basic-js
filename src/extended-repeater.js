const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let sep = '+';
  let sepr = 0;

  let ad = '';
  let adr = 0;
  let adSep = '|';

  if (options.separator) sep = options.separator;
  if (options.repeatTimes) sepr = options.repeatTimes;

  if (
    options.addition ||
    options.addition === false ||
    options.addition === null
  )
    ad = options.addition;
  if (options.additionRepeatTimes) adr = options.additionRepeatTimes;
  if (options.additionSeparator) adSep = options.additionSeparator;
  console.log('addition', options.addition);
  console.log('addition repeat', adr);
  console.log('addition sep ', adSep);

  let resAd;
  if (ad || options.addition === false || options.addition === null) {
    resAd = ad;
    for (let i = 1; i < adr; i++) {
      resAd += adSep + ad;
      console.log('addition', resAd);
    }
  }

  let res;
  if (resAd) {
    res = str + resAd;
    for (let i = 1; i < sepr; i++) {
      res += sep + str + resAd;
    }
  } else {
    res = str;
    for (let i = 1; i < sepr; i++) {
      res += sep + str;
    }
  }
  console.log('res first', res);

  console.log('result', res);

  return res;
}

module.exports = {
  repeater,
};
