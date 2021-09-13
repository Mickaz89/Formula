const fs = require("fs");
const pool = require('../../db/pool');
const fastcsv = require("fast-csv");

const query = `COPY pit_stops(raceId, driverId, stop, lap, time, duration, milliseconds)
FROM '${process.env.CSV_PATH}/pit_stops.csv'
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