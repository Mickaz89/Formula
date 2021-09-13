const fs = require("fs");
const pool = require('../../db/pool');
const fastcsv = require("fast-csv");


const query = `COPY circuits(circuitId, circuitRef, name, location, country, lat, lng, alt, url)
FROM '${process.env.CSV_PATH}/circuits.csv'
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