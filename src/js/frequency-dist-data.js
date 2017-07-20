'use strict';
import { calculateColumns, rangeOfMeasures } from './data-helpers';
import { FrequencyDistTable } from './FrequencyDistTable';
const d3 = require('d3');

/*
 * Frequency Distribution Tables – How frequently is data distributed at each measure?
 *
 * The first column contains the measure ordered from highest to lowest, the second column contains the number of cases of that measure.
 * Use the symbol N to represent the total number of cases in a group.
 */

export const frequencyData = () => {
  d3.csv('../data/scores.csv', (error, data) => {
    if (error) throw error;

    const maxValue = d3.max(data, d => +d.score);
    const minValue = d3.min(data, d => +d.score);

    const scores = rangeOfMeasures(data, maxValue, minValue, 'score');
    const row_data = calculateColumns(scores);
    const rows = row_data[0];
    const lastColumnLength = row_data[1];

    d3.text('src/template/table.html', str => {
      d3.select('.container').append('div').attr('id', 'freq-table').html(str);

      new FrequencyDistTable('#freq-table tbody', rows, '#freq-table', 'SCORE', 'Table 2.1   /   Simple Frequency Distribution of Anxiety Scores for 100 College Students', 'Ahana, E. Y. A study on the reliability and internal consistency of a manifest anxiety scale. M.A. thesis, Northwestern Univeristy, 1952.').init();

      d3.select(`#freq-table tbody tr:nth-child(${lastColumnLength + 1}) td:nth-child(5)`)
          .attr('data-symbol', 'N')
          .append('span')
          .text('N=');

      d3.select(`#freq-table tbody tr:nth-child(${lastColumnLength + 1}) td:nth-child(6)`)
          .append('span')
          .attr('class', 'lineover')
          .text(`${d3.sum(scores, d => d[1])}`);
    });
  });
}
