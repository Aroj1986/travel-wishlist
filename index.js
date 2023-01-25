const express = require('express')
const wishListRouter = require('./routes/wishListRouter')

const app = express()
const PORT = 3002

app.use(express.json())
app.use('/api/countries', wishListRouter)
app.listen(PORT, ()=>{
    console.log(`Server listening and running at https://localhost:${PORT}`)
})