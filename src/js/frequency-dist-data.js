'use strict';
import { FrequencyDistTable } from './FrequencyDistTable';
const d3 = require('./d3.min.js');

/*
 * Frequency Distribution Tables – How frequently is data distributed at each measure?
 *
 * The first column contains the measure ordered from highest to lowest, the second column contains the number of cases of that measure.
 * Use the symbol N to represent the total number of cases in a group.
 */

export const frequencyData = () => {
  d3.csv('../data/scores.csv', (error, data) => {
    if (error) throw error;

    d3.text('src/template/table.html', str => {
      d3.select('.container').append('div').attr('id', 'freq-table').html(str);

      new FrequencyDistTable('#freq-table tbody', data, '#freq-table', 'SCORE', 'Table 2.1   /   Simple Frequency Distribution of Anxiety Scores for 100 College Students', 'Ahana, E. Y. A study on the reliability and internal consistency of a manifest anxiety scale. M.A. thesis, Northwestern Univeristy, 1952.').init();
    });
  });
}
