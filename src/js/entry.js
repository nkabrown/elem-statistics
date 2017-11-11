'use strict';
import { FrequencyDistTable } from './FrequencyDistTable';
import { FrequencyPolygon } from './FrequencyPolygon';
import { TwoGroupsTable } from './TwoGroupsTable';
const d3 = require('./d3.min.js');

const dataGenerator = (mount, dataPath, template, caseName) => {
  d3.csv(dataPath, (error, data) => {
    if (error) throw error;

    d3.text(template, str => {
      d3.select('.container').append('div').attr('id', mount).html(str);

      switchcaseF({
        'FREQ-DIST': () => new FrequencyDistTable('#freq-table tbody', data, '#freq-table', 'SCORE', 'Table 2.1   /   Simple Frequency Distribution of Anxiety Scores for 100 College Students', 'Ahana, E. Y. A study on the reliability and internal consistency of a manifest anxiety scale. M.A. thesis, Northwestern Univeristy, 1952.').init(),
        'TWO-GROUPS': () => new TwoGroupsTable('#table tbody', data, '#table', 'Table 1.1  /  Scores Made by the Neutral and the Anxious Group on Memory Span for Digits', 'Moldawsky, S., and Moldawsky, P.C. Digit span as an anxiety indicator. J. consult. Psychol., 1952, 16, 115-118. Raw data courtesy of the authors.').init(),
        'FREQ-POLY': () => new FrequencyPolygon('#freq-polygon svg', data, '#freq-polygon', {top:20,right:20,bottom:20,left:45}, 375, 225, '', 'Strong, E. K., Jr. Nineteen-year followup of engineer interests. J. appl. Psychol., 1952, 36, 65-74.').init()
      })(caseName);
    });
  });
}

dataGenerator('table', '../data/memory-span.csv', 'src/template/table.html', 'TWO-GROUPS');
dataGenerator('freq-table', '../data/scores.csv', 'src/template/table.html', 'FREQ-DIST');

const switchcase = cases => key => key in cases ? cases[key] : null;

const switchcaseF = cases => key => switchcase(cases)(key)();
