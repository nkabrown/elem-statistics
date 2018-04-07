'use strict';
import { FrequencyDistTable } from './FrequencyDistTable';
import { FrequencyPolygon } from './FrequencyPolygon';
import { TwoGroupsTable } from './TwoGroupsTable';
const d3 = require('./d3.min.js');

export const dataGenerator = (mount, dataPath, template, caseName) => {
  d3.csv(dataPath, (error, data) => {
    if (error) throw error;

    d3.text(template, str => {
      d3.select('.container').append('div').attr('id', mount).html(str);

      switchcaseF({
        'FREQ-DIST': () => new FrequencyDistTable('#freq-table tbody', data, '#freq-table', 'SCORE', 'Table 2.1   /   Simple Frequency Distribution of Anxiety Scores for 100 College Students', 'Ahana, E. Y. A study on the reliability and internal consistency of a manifest anxiety scale. M.A. thesis, Northwestern Univeristy, 1952.').init(),
        'TWO-GROUPS': () => new TwoGroupsTable('#table tbody', data, '#table', 'Table 1.1  /  Scores Made by the Neutral and the Anxious Group on Memory Span for Digits', 'Moldawsky, S., and Moldawsky, P.C. Digit span as an anxiety indicator. J. consult. Psychol., 1952, 16, 115-118. Raw data courtesy of the authors.').init(),
        'FREQ-POLY': () => new FrequencyPolygon('#freq-polygon-1 svg', data, 'both', '#freq-polygon-1', {top:20,right:20,bottom:60,left:45}, 570, 465, '', 'Strong, E. K., Jr. Nineteen-year followup of engineer interests. J. appl. Psychol., 1952, 36, 65-74.').init(),
        'FREQ-POLY-ENG': () => new FrequencyPolygon('#freq-polygon-2 svg', data, 'engineers', '#freq-polygon-2', {top:20,right:20,bottom:60,left:45}, 375, 265, '', '').init(),
        'FREQ-POLY-FRESH': () => new FrequencyPolygon('#freq-polygon-3 svg', data, 'freshmen', '#freq-polygon-3', {top:20,right:20,bottom:60,left:45}, 375, 265, '', '').init()
      })(caseName);
    });
  });
}

const switchcase = cases => key => key in cases ? cases[key] : null;

const switchcaseF = cases => key => switchcase(cases)(key)();
