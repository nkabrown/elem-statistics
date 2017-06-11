class FrequencyTable {
  constructor(el, d, c) {
    this.mount = el;
    this.data = d;
    this.caption = c;
  }

  init() {
    d3.select('figcaption')
       .text(this.caption);

    d3.select(this.mount)
       .selectAll('.row')
       .data(this.data)
     .enter().append('tr')
       .attr('class', 'row')
       .html(d => `<td>${d.key}</td><td>${d.values}</td>`);

    d3.select('tbody')
      .append('tr')
      .attr('class', 'row')
      .html(`<span class="total">N=</span><td class="lineover">${d3.sum(this.data, d => d.values)}</td>`);
  }
}

d3.csv('../data/scores.csv', (error, data) => {
  if (error) throw error;

  const groupedScores = d3.nest()
     .key(d => d.score)
     .rollup(leaves => leaves.length)
     .entries(data);

  // arrange the measures in order from highest to lowest
  groupedScores.sort((a,b) => {
    return +b.key - +a.key;
  });

  d3.text('src/modal/frequencyTable.html', str => {
     d3.select('.container').append('div').attr('class', 'freq-table').html(str);

     new FrequencyTable('tbody', groupedScores, 'Table 1.1 / Frequency Distribution of Anxiety Scores for 100 Colege Students').init();
  });
});
