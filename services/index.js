const pool = require('../db/pool')

const getDriversBySeason = (request, response) => {

  const season = request.query.season

  const query = `SELECT DISTINCT races.year, races.name, drivers.forename, drivers.surname, driver_standings.wins FROM driver_standings 
    LEFT JOIN races ON year = ${season}  
    LEFT JOIN drivers ON drivers.driverId = driver_standings.driverId
    GROUP BY
    races.year,
    races.name,
    drivers.forename,
    drivers.surname,
    driver_standings.wins
    ORDER BY wins DESC;`

  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getDriversBySeason,
}

const getDriversProfile = (request, response) => {

  // Driver profile: Get a specific driver (by id/name) with all of his races sorted by date from newest to the oldest
  // For each race show the following properties:
  // Average lap time
  // Fastest lap time
  // Slowest lap time
  // Number of pit stops
  // Fastest pit stop
  // Slowest pit stop
  // Circuit name
  // Points
  // Position

  // 1 -> Select all users races 
  // 2 -> Select all lap_times WHERE lap_times.driverId = driverId AND lap_times.raceId = raceId

  // What is a lap ? How can i calculate average lap time ? I don't know about Formula 
  //There is a table lap_times but there is also a field lap_times in results , what is the relation between us ?


  const driverId = request.query.driverId


  // SELECT R.year, R.name, D.forename, D.surname, RS.points, RS.position 
  // FROM driver_standings as DS
  // LEFT JOIN races as R on R.raceId = DS.raceId
  // LEFT JOIN drivers as D on D.driverId = DS.driverId
  // LEFT JOIN results as RS on RS.raceId = DS.raceId
  // WHERE  DS.driverId = 4;

  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



const getSeasonsAllTimeRanking = (request, response) => {

  // Seasons all-time ranking: returns a list of seasons with the top 3 drivers in each season

  // What define a top driver ? 

  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getDriversBySeason,
  getDriversProfile,
  getSeasonsAllTimeRanking
}