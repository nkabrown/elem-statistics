'use strict';

export const rangeOfMeasures = (data, max, min, measure) => {
  // map range of measures to zero values in order from highest to lowest measure
  let scores = new Map();
  for (let i = max; i >= min; i--) {
    scores.set(i, 0);
  }

  // for every instance of measure in dataset increment map by one
  for (const d of data) {
    const key = +d[measure];
    if (scores.has(key)) {
      let val = scores.get(key);
      val += 1;
      scores.set(key, val);
    }
  }

  // convert map to an array of pairs
  scores = [...scores];
  return scores;
}

export const calculateColumns = (data) => {
  // calculate column length
  const tdLength = data.length + 1;
  const columnLength = Math.ceil(tdLength / 3);
  const lastColumnLength = data.length % columnLength;

  const column_one_data = data.slice(0, columnLength);
  const column_two_data = data.slice(columnLength, columnLength * 2);
  const column_three_data = data.slice(columnLength * 2, columnLength * 3);

  // create a 2-dimensional array of table data
  let rows = [];
  for (let i = 0; i < columnLength; i++) {
    const row_data = [column_one_data[i][0], column_one_data[i][1], column_two_data[i][0], column_two_data[i][1], column_three_data[i] ? column_three_data[i][0] : '', column_three_data[i] ? column_three_data[i][1] : ''];
    rows.push(row_data);
  }

  return [rows, lastColumnLength];
}
