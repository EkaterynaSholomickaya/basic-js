const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  for (let i = 0; i < names.length; i++) {
    let fName = names[i];

    if (names.indexOf(fName) !== i) {
      names[i] = fName + '(1)';

      while (names.indexOf(names[i]) !== i) {
        fName = names[i];

        let j = fName.indexOf('(');

        let a = fName.slice(0, j + 1);
        let b = +fName[j + 1];
        b++;
        let c = ')';

        names[i] = a + b + c;
      }
    }
  }
  return names;
}

module.exports = {
  renameFiles,
};
