const fs = require("fs");
const pool = require('../../db/pool');
const fastcsv = require("fast-csv");

const query = `COPY seasons(year, url)
FROM '${process.env.CSV_PATH}/seasons.csv'
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