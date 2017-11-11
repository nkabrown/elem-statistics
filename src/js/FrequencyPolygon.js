'use strict';
const d3 = require('./d3.min.js');

export class FrequencyPolygon {
  constructor(el, d, i, m, w, h, c, a) {
    this.mount = el;
    this.data = d;
    this.identity = i;
    this.margin = m;
    this.width = w - this.margin.right - this.margin.left;
    this.height = h - this.margin.bottom - this.margin.top;
    this.caption = c;
    this.attribution = a;
  }

  init() {
    d3.select(`${this.identity} figcaption`)
        .text(this.caption);

    const graph = d3.select(this.mount)
        .attr('width', this.width + this.margin.right + this.margin.left)
        .attr('height', this.height + this.margin.bottom + this.margin.top)
      .append('g')
         .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    graph.append('rect')
       .attr('class', 'polygon-background')
       .attr('width', this.width + this.margin.right + this.margin.left - 11.5)
       .attr('height', this.height)
       .attr('transform', `translate(0, 0)`);

    const x = d3.scaleLinear()
        .range([0, this.width]);

    const y = d3.scaleLinear()
        .range([this.height, 0]);
         
    const xAxis = d3.axisBottom(x)
        .ticks(16)
        .tickSize(-this.height - 50);

    const yAxis = d3.axisLeft(y)
        .ticks(4)
        .tickSize(-this.width - 50);

    x.domain([d3.min(this.data, d => d.midpoint), d3.max(this.data, d => d.midpoint)]);
    y.domain([0, 20]);

    graph.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${this.height})`)
        .call(xAxis);

    graph.append('g')
        .attr('class', 'y-axis')
        .call(yAxis);

    const firstXAxis = d3.selectAll('.x-axis .tick').nodes()[0]
    d3.select(firstXAxis).attr('visibility', 'hidden');
    const firstYAxis = d3.selectAll('.y-axis .tick').nodes()[0];
    d3.select(firstYAxis).attr('visibility', 'hidden');

    const line = d3.line()
       .x(d => x(d.midpoint))
       .y(d => y(d.percent));

    console.log(d3.select(`${this.identity} small`));

    d3.select(`${this.identity} small`)
        .text(this.attribution);
  }
}
