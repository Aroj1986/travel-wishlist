const { pool } = require('../sqlDatabase')

// app.get
const getCountries = async (req, res)=>{
    try {
        const countryList = await pool.query('select * from countries')
        res.json(countryList.rows)
    } catch (err) {
        res.status(500).send(err)
    }
}

// app.get
const getCountry = async (req, res) => {
    try {
        const {code} = req.params
        const country = await pool.query('select * from countries where id=$1;', [code])
        res.json(country.rows[0])
    } catch (err) {
        res.status(500).send(err)
    }
}

// app.post
const addCountry = async (req, res) => {
    try {
        const {countryName, twoCode, threeCode} = req.body
        const countryToAdd = await pool.query(`insert into countries (name, alpha2code, alpha3code) values ($1, $2, $3) returning *`, [countryName, twoCode, threeCode])
        res.json(countryToAdd.rows[0])
    } catch (err) {
        res.status(500).send(err)
    }
}

// app.put
const editCountry = async (req, res) => {
    try {
        const {code} = req.params
        const {countryName, twoCode, threeCode} = req.body
        const countryToEdit = await pool.query(`update countries set name=$1, alpha2code=$2, alpha3code=$3 where id=$4 returning *`, [countryName, twoCode, threeCode, code])
        res.json(countryToEdit.rows[0])
    } catch (err) {
        res.status(500).send(err)
    }
}

// app.delete
const deleteCountry = async (req, res) => {
    try {
        const {code} = req.params
        const countryToDelete = await pool.query(`delete from countries where id=$1`, [code])
        res.json(countryToDelete)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {getCountries, getCountry, addCountry, editCountry, deleteCountry}