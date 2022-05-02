const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    if (!arr) return 1;
    function deep(arr) {
      if (Array.isArray(arr)) {
        return Math.max(0, ...arr.map(deep)) + 1;
      } else return 0;
    }
    return deep(arr);
  }
}

function getMaxDepth(arr) {}
module.exports = {
  DepthCalculator,
};
