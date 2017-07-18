'use strict';
import { TwoGroupsTable } from './TwoGroupsTable';
const d3 = require('d3');

export const memorySpan = () => {
  d3.csv('../data/memory-span.csv', (error, data) => {
    if (error) throw error;

    console.log(data);

    d3.text('src/modal/table.html', str => {
      d3.select('.container').append('div').attr('id', 'table').html(str);

      new TwoGroupsTable('#table tbody', data, '#table', 'Table 1.1  /  Scores Made by the Neutral and the Anxious Group on Memory Span for Digits', 'Moldawsky, S., and Moldawsky, P.C. Digit span as an anxiety indicator. J. consult. Psychol., 1952, 16, 115-118. Raw data courtesy of the authors.').init();
    });
  });
}
