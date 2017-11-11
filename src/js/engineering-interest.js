'use strict';
import { FrequencyPolygon } from './FrequencyPolygon';
const d3 = require('./d3.min.js');

export const engineeringInterest = () => {
  d3.csv('../data/engineering-interest.csv', (error, data) => {
    if (error) throw error;
    console.log(data);
    data.forEach(d => {
      d.midpoint = +d.midpoint;
      d.percent = +d.percent;
    });

    d3.text('src/template/graph.html', str => {
      d3.select('.container').append('div').attr('id', 'freq-polygon').html(str);

      new FrequencyPolygon('#freq-polygon svg', data, '#freq-polygon', {top:20,right:20,bottom:20,left:45}, 375, 225, '', 'Strong, E. K., Jr. Nineteen-year followup of engineer interests. J. appl. Psychol., 1952, 36, 65-74.').init();
    });
  });
}
