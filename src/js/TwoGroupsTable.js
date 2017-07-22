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

    const rows = this.createRowData(this.createColumns());

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

  createColumns() {
    // calculate column length
    const tdLength = this.data.length;;
    const columnLength = Math.ceil(tdLength / 4);

    let columns = [columnLength];
    columns.push(this.data.slice(0, columnLength));
    columns.push(this.data.slice(columnLength, columnLength * 2));
    columns.push(this.data.slice(columnLength * 2, columnLength * 3));
    columns.push(this.data.slice(columnLength * 3));
    return columns;
  }

  createRowData(columns) {
    let rows = [];
    for (let i = 0; i < columns[0]; i++) {
      let row_data = [columns[1][i].score, columns[2][i].score, columns[3][i].score, columns[4][i].score];
      rows[rows.length] = row_data;
    }
    return rows;
  }
}
