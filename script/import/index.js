const pool = require('../../db/pool');
const query = require('../create/queries');

const importCircuits = require('./circuits')
const importConsctructorResults = require('./constructor_results')
const importConsctructorStandings = require('./constructor_standings')
const importConsctructors = require('./constructors')
const importDriverStandings = require('./driver_standings')
const importDrivers = require('./drivers')
const importLapTimes = require('./lap_times')
const importPitStops = require('./pit_stops')
const importQualifying = require('./qualifying')
const importRaces = require('./races')
const importResults = require('./results')
const importSeasons = require('./seasons')
const importStatus = require('./status')

module.exports = function () {


    importCircuits().then(res => console.log('circuits loaded'))
    importConsctructorResults().then(res => console.log('constructor_results loaded'))
    importConsctructorStandings().then(res => console.log('constructor_standings loaded'))
    importConsctructors().then(res => console.log('constructors loaded'))
    importDriverStandings().then(res => console.log('driver_standings loaded'))
    importDrivers().then(res => console.log('drivers loaded'))
    importLapTimes().then(res => console.log('lap_times loaded'))
    importPitStops().then(res => console.log('pit_stops loaded'))
    importQualifying().then(res => console.log('qualifying loaded'))
    importRaces().then(res => console.log('races loaded'))
    importResults().then(res => console.log('results loaded'))
    importSeasons().then(res => console.log('seasons loaded'))
    importStatus().then(res => console.log('status loaded'))



}
