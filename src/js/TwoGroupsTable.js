'use strict';
const d3 = require('d3');

export class TwoGroupsTable {
  constructor(el, d, i, c, a) {
    this.mount = el;
    this.data = d;
    this.identity = i;
    this.caption = c;
    this.attribution = a;
  }

  init() {
    d3.select(`${this.identity} figcaption`)
        .text(this.caption);

    // get a collection of unique property values
    const groups  = [...new Set(this.data.map(d => d.group))];

    d3.select(`${this.identity} thead`)
       .html(`<tr><th>${groups[0].toUpperCase()} GROUP</th><th>${groups[1].toUpperCase()} GROUP</th></tr>`);
  }
}
