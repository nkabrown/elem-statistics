'use strict';
const d3 = require('d3');

export class FrequencyDistTable {
  constructor(el, d, m, c, a) {
    this.mount = el;
    this.data = d;
    this.measure = m;
    this.caption = c;
    this.attribution = a;
  }

  init() {
    d3.select('figcaption')
       .text(this.caption);

    d3.select('thead')
       .html(`<tr><th>${this.measure}</th><th>&#402;</th><th>${this.measure}</th><th>&#402;</th><th>${this.measure}</th><th>&#402;</th></tr>`);

    d3.select(this.mount)
       .selectAll('.row')
       .data(this.data)
     .enter().append('tr')
       .attr('class', 'row')
       .html(d => `<td>${d[0]}</td><td>${d[1]}</td><td>${d[2]}</td><td>${d[3]}</td><td>${d[4]}</td><td>${d[5]}</td>`);

    d3.select('small')
       .text(this.attribution);
  }
}
