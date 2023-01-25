const {Pool} = require('pg')
const pool = new Pool({
    connectionString:'postgres://ovknvtna:zlemPhqeRdTx_cbLz02L5qLDLVoNHV1H@dumbo.db.elephantsql.com/ovknvtna'
})

module.exports = {pool}