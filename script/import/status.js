const fs = require("fs");
const pool = require('../../db/pool');
const fastcsv = require("fast-csv");

const query = `COPY status(statusId, status)
FROM '${process.env.CSV_PATH}/status.csv'
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