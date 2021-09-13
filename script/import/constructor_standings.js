const fs = require("fs");
const pool = require('../../db/pool');
const fastcsv = require("fast-csv");

const query = `COPY constructor_standings(constructorStandingsId, raceId, constructorId, points, position, positionText, wins)
FROM '${process.env.CSV_PATH}/constructor_standings.csv'
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