'use strict';
const d3 = require('./d3.min.js');

export class FrequencyDistTable {
  constructor(el, d, i, m, c, a) {
    this.mount = el;
    this.data = d;
    this.identity = i;
    this.measure = m.toLowerCase();
    this.caption = c;
    this.attribution = a;
  }

  init() {
    d3.select(`${this.identity} figcaption`)
       .text(this.caption);

    d3.select(`${this.identity} thead`)
       .html(`<tr><th>${this.measure}</th><th>&#402;</th><th>${this.measure}</th><th>&#402;</th><th>${this.measure}</th><th>&#402;</th></tr>`);

    const maxValue = d3.max(this.data, d => +d.score);
    const minValue = d3.min(this.data, d => +d.score);

    const scores = this.rangeOfMeasures(maxValue, minValue);
    const row_data = this.createRowData(this.createColumns(scores));
    const rows = row_data[0];
    const lastColumnLength = row_data[1];

    d3.select(this.mount)
       .selectAll('.row')
       .data(rows)
     .enter().append('tr')
       .attr('class', 'row')
       .html(d => `<td>${d[0]}</td><td>${d[1]}</td><td>${d[2]}</td><td>${d[3]}</td><td>${d[4]}</td><td>${d[5]}</td>`);

    d3.select(`${this.identity} small`)
       .text(this.attribution);

    d3.select(`#freq-table tbody tr:nth-child(${lastColumnLength + 1}) td:nth-child(5)`)
        .attr('data-symbol', 'N')
        .append('span')
        .text('N=');

    d3.select(`#freq-table tbody tr:nth-child(${lastColumnLength + 1}) td:nth-child(6)`)
        .append('span')
        .attr('class', 'lineover')
        .text(`${d3.sum(scores, d => d[1])}`);
  }

  rangeOfMeasures(max, min) {
    // map range of measures to zero values in order from highest to lowest measure
    let scores = new Map();
    for (let i = max; i >= min; i--) {
      scores.set(i, 0);
    }

    // for every instance of measure in dataset increment map by one
    for (const d of this.data) {
      const key = +d[this.measure];
      if (scores.has(key)) {
        let val = scores.get(key);
        val += 1;
        scores.set(key, val);
      }
    }

    // convert map to an array of pairs
    scores = [...scores];
    return scores;
  }

  createColumns(data) {
    // calculate column length
    const tdLength = data.length + 1;
    const columnLength = Math.ceil(tdLength / 3);
    const lastColumnLength = data.length % columnLength;

    let columns = [lastColumnLength, columnLength];
    columns.push(data.slice(0, columnLength));
    columns.push(data.slice(columnLength, columnLength * 2));
    columns.push(data.slice(columnLength * 2, columnLength * 3));
    return columns;
  }

  createRowData(columns) {
    let rows = [];
    for (let i = 0; i < columns[1]; i++) {
      let row_data = [columns[2][i][0], columns[2][i][1], columns[3][i][0], columns[3][i][1], columns[4][i] ? columns[4][i][0] : '', columns[4][i] ? columns[4][i][1] : ''];
      rows.push(row_data);
    }
    return [rows, columns[0]];
  }
}
