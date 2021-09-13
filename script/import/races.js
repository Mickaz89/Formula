const fs = require("fs");
const pool = require('../../db/pool');
const fastcsv = require("fast-csv");

const query = `COPY races(raceId, year, round, circuitId, name, date, time, url)
FROM '${process.env.CSV_PATH}/races.csv'
DELIMITER ','
CSV HEADER;`

module.exports = function () {
  return new Promise( (resolve, reject) => {
    pool.query(query)
    .then( res => {
      resolve()
    })
    .catch(err => {
      console.log('Error', err)
      reject()
    })
  })
}