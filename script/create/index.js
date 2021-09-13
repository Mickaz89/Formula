const pool = require('../../db/pool');
const query = require('./queries');

module.exports = function () {

  console.log('CREATE CREATE', process.env.DB_HOST)

  return new Promise( async (resolve, reject) => {

    const promises = [
      pool.query(query.createCircuitsTable),
      pool.query(query.createConstructorResultsTable),
      pool.query(query.createConstructorStandingsTable),
      pool.query(query.createConstructorsTable),
      pool.query(query.createDriverStandingsTable),
      pool.query(query.createDriversTable),
      pool.query(query.createLapTimesTable),
      pool.query(query.createPitStopsTable),
      pool.query(query.createQualifyingTable),
      pool.query(query.createRacesTable),
      pool.query(query.createResultsTable),
      pool.query(query.createSeasonsTable),
      pool.query(query.createStatusTable)
  ];
  
    
      Promise.all(promises)
      .then(res => resolve())
      .catch(err => {
        console.log(err.code)
        if(err.code == '42P07'){
          resolve(); 
        }
      })

    
  });
}
