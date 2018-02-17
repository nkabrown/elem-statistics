'use strict';
import { dataGenerator } from './data-generator';
const d3 = require('./d3.min.js');

dataGenerator('table', 'src/data/memory-span.csv', 'src/template/table.html', 'TWO-GROUPS');
dataGenerator('freq-table', 'src/data/scores.csv', 'src/template/table.html', 'FREQ-DIST');
dataGenerator('freq-polygon-2', 'src/data/engineering-interest.csv', 'src/template/graph.html', 'FREQ-POLY-ENG');
dataGenerator('freq-polygon-3', 'src/data/engineering-interest.csv', 'src/template/graph.html', 'FREQ-POLY-FRESH');


