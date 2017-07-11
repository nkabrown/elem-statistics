'use strict';
const d3 = require('d3');

export class TwoGroupsTable {
  constructor(el, d, c, a) {
    this.mount = el;
    this.data = d;
    this.caption = c;
    this.attribution = a;
  }

  init() {
    d3.select('figcaption')
        .text(this.caption);

  }
}
