//Modules
const express = require('express');
const app = express();
const cors = require('cors')
const mvpList = require('./mvpList.js')
PORT = 3000;

//Middlewares
app.use(cors())
app.use(express.static(path.resolve(__dirname, 'public')));

//Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(mvpList.mvpList)
})

app.get('/api/:year', (req, res) => {
    const mvpYear = req.params.year.toString()

    if(mvpList.mvpList[mvpYear]) {
        res.json(mvpList.mvpList[mvpYear])
    } else {
        res.json(mvpList.mvpList['error'])
    }
})

//Listen
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})
