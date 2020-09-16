const express = require('express')
const app = express()

app.use(express.static('FRONTEND/build'))
const path = require('path')
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'FRONTEND', 'build', 'index.html'))
})

app.listen(3001, () => {
    console.log(`\nServer is running on PORT 3001`)
})
