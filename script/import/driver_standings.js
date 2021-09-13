const fs = require("fs");
const pool = require('../../db/pool');
const fastcsv = require("fast-csv");

const query = `COPY driver_standings(driverStandingsId, raceId, driverId, points, position, positionText, wins)
FROM '${process.env.CSV_PATH}/driver_standings.csv'
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