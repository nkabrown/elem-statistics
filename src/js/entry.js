'use strict';
import { FrequencyDistTable } from './freq-dist-table';
const d3 = require('d3');

d3.csv('../../data/scores.csv', (error, data) => {
  if (error) throw error;

  const maxValue = d3.max(data, d => +d.score);
  const minValue = d3.min(data, d => +d.score);
  // map range of scores to zero values in order from highest to lowest measure
  let scores = new Map();
  for (let i = maxValue; i >= minValue; i--) {
    scores.set(i, 0); 
  }

  // for every score in dataset increment map by one
  for (let d of data) {
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
  const lastColumnLength = scores.length % columnLength;

  let column_data = [];
  const column_one_data = scores.slice(0,columnLength);
  const column_two_data = scores.slice(columnLength,columnLength * 2);
  const column_three_data = scores.slice(columnLength * 2,columnLength * 3);

  let rows = [];
  for (let i = 0; i < columnLength; i++) {
    let row_data = [column_one_data[i][0], column_one_data[i][1], column_two_data[i][0], column_two_data[i][1], column_three_data[i] ? column_three_data[i][0] : '', column_three_data[i] ? column_three_data[i][1] : ''];
    rows.push(row_data);
  }

  d3.text('src/modal/frequencyTable.html', str => {
     d3.select('.container').append('div').attr('class', 'freq-table').html(str);

     new FrequencyDistTable('tbody', rows, 'SCORE', 'Table 2.1   /   Simple Frequency Distribution of Anxiety Scores for 100 Colege Students', 'Ahana, E. Y. A study on the reliability and internal consistency of a manifest anxiety scale. M.A. thesis, Northwestern Univeristy, 1952.').init();

    d3.select(`tbody tr:nth-child(${lastColumnLength + 1}) td:nth-child(5)`)
        .attr('data-symbol', 'N')
        .append('span')
        .text('N=');

    d3.select(`tbody tr:nth-child(${lastColumnLength + 1}) td:nth-child(6)`)
        .append('span')
        .attr('class', 'lineover')
        .text(`${d3.sum(scores, d => d[1])}`);
  });
});
