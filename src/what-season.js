const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');

  if (date === undefined) return 'Unable to determine the time of year!';
  let m = date.getMonth();
  if (m === undefined) return 'Invalid date!';

  // console.log(m);
  // if (typeof date === 'object' && date instanceof Date())
  //   ;
  if (2 <= m && m <= 4) return 'spring';
  else if (5 <= m && m <= 7) return 'summer';
  else if (8 <= m && m <= 10) return 'autumn';
  else if (m === 0 || m === 1 || m === 11) return 'winter';
  else return 'Invalid date!';
}

module.exports = {
  getSeason,
};
