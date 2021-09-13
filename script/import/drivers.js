const fs = require("fs");
const pool = require('../../db/pool');
const fastcsv = require("fast-csv");

const query = `COPY drivers(driverId, driverRef, number, code, forename, surname, dob, nationality, url)
FROM '${process.env.CSV_PATH}/drivers.csv'
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