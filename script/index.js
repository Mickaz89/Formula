require('dotenv').config()
const pool = require('../db/pool')
const createTables = require('./create/index');
const loadTables = require('./import/index');


createTables().then(res => {
    console.log('tables created')
    loadTables()
})









