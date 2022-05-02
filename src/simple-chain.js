const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  node: [],

  getLength() {
    console.log(this.node);
    return this.node.length;
  },
  addLink(val) {
    if (val === null) this.node.push('null');
    else if (typeof val != 'string') this.node.push(val.toString());
    else this.node.push(val);
    console.log(this.node);
    return this;
  },
  removeLink(p) {
    this.node.splice(p - 1, 1);
    console.log(this.node);
    return this;
  },
  reverseChain() {
    this.node.reverse();
    console.log(this.node);
    return this;
  },
  finishChain() {
    let l = this.node.length;
    first = '( ' + this.node[0] + ' )';

    for (let i = 1; i < l; i++) {
      first += '~~( ' + this.node[i] + ' )';
    }
    this.node.splice(0, l);

    return first;
  },
};
module.exports = {
  chainMaker,
};
