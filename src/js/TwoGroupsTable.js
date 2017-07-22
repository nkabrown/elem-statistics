'use strict';
const d3 = require('./d3.min.js');

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

    // calculate column length
    const tdLength = this.data.length;;
    const columnLength = Math.ceil(tdLength / 4);

    const column_one_data = this.data.slice(0, columnLength);
    const column_two_data = this.data.slice(columnLength, columnLength * 2);
    const column_three_data = this.data.slice(columnLength * 2, columnLength * 3);
    const column_four_data = this.data.slice(columnLength * 3);

    let rows = [];
    for (let i = 0; i < columnLength; i++) {
      let row_data = [column_one_data[i].score, column_two_data[i].score, column_three_data[i].score, column_four_data[i].score];
      rows[rows.length] = row_data;
    }

    d3.select(`${this.identity} thead`)
       .html(`<tr><th colspan="2">${groups[0].toUpperCase()} GROUP</th><th></th><th colspan="2">${groups[1].toUpperCase()} GROUP</th></tr>`);

    d3.select(this.mount)
        .selectAll('.row')
        .data(rows)
      .enter().append('tr')
        .attr('class', 'row')
        .html(d => `<td>${d[0]}</td><td>${d[1]}</td><td></td><td>${d[2]}</td><td>${d[3]}</td>`);

    d3.select(`${this.identity} small`)
        .text(this.attribution);
  }
}
