/*
 * Frequency Distribution Tables – How frequently is data distributed at each measure?
 *
 * The first column contains the measure ordered from highest to lowest, the second column contains the number of cases of that measure.
 * Use the symbol N to represent the total number of cases in a group.
 */

class FrequencyDistTable {
  constructor(el, d, c, a) {
    this.mount = el;
    this.data = d;
    this.caption = c;
    this.attribution = a;
  }

  init() {
    d3.select('figcaption')
       .text(this.caption);

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

d3.csv('../data/scores.csv', (error, data) => {
  if (error) throw error;

  const maxValue = d3.max(data, d => +d.score);
  const minValue = d3.min(data, d => +d.score);
  // map range of scores to zero values in order from highest to lowest measure
  let scores = new Map();
  for (let i = maxValue; i >= minValue; i--) {
    scores.set(i, 0); 
  }

  // for every score in dataset increment map by one
  for (d of data) {
    const key = +d.score;
    if (scores.has(key)) {
      let val = scores.get(key);
      val += 1;
      scores.set(key, val);
    }
  };

  // convert map to an array of pairs
  scores = [...scores];

  // calculate column length
  const tdLength = scores.length + 1;
  const columnLength = Math.ceil(tdLength / 3);

  let column_data = [];
  const column_one_data = scores.slice(0,13);
  const column_two_data = scores.slice(13,26);
  const column_three_data = scores.slice(26,39);

  let rows = [];
  for (let i = 0; i < columnLength; i++) {
    let row_data = [column_one_data[i][0], column_one_data[i][1], column_two_data[i][0], column_two_data[i][1], column_three_data[i] ? column_three_data[i][0] : 'N =', column_three_data[i] ? column_three_data[i][1] : `<span class="lineover">${d3.sum(scores, d => d[1])}</span>`];
    rows.push(row_data);
  }


  d3.text('src/modal/frequencyTable.html', str => {
     d3.select('.container').append('div').attr('class', 'freq-table').html(str);

     new FrequencyDistTable('tbody', rows, 'Table 1.1   /   Simple Frequency Distribution of Anxiety Scores for 100 Colege Students', 'Ahana, E. Y. A study on the reliability and internal consistency of a manifest anxiety scale. M.A. thesis, Northwestern Univeristy, 1952.').init();
  });
});
