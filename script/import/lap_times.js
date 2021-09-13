const fs = require("fs");
const pool = require('../../db/pool');
const fastcsv = require("fast-csv");

const query = `COPY lap_times(raceId, driverId, lap, position, time, milliseconds)
FROM '${process.env.CSV_PATH}/lap_times.csv'
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