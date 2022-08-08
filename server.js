const express = require('express');
const app = express();
const cors = require('cors')
PORT = 3000;
app.use(cors())

const basketball = {
    'lebron james': {
        'name': 'Lebron James',
        'age': 37,
        'ppg': 27.1,
        'rpg': 7.5,
        'apg': 7.4,
        'status': 'active'
    },
    'kevin durant': {
        'name': 'Kevin Durany',
        'age': 33,
        'ppg': 27.2,
        'rpg': 7.1,
        'apg': 4.3,
        'status': 'active'
    },
    'michael jordan': {
        'name': 'Michael Jordan',
        'age': 59,
        'ppg': 30.1,
        'rpg': 5.3,
        'apg': 6.2,
        'status': 'retired'
    },
    'larry bird': {
        'name': 'Larry Bird',
        'age': 59,
        'ppg': 24.3,
        'rpg': 10.0,
        'apg': 6.3,
        'status': 'retired'
    },
    'stpehen curry': {
        'name': 'Stpehen Curry',
        'age': 34,
        'ppg': 24.3,
        'rpg': 4.6,
        'apg': 6.5,
        'status': 'active'
    },
    'error': {
        'error': 'Enter a valid name'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const ballerName = req.params.name.toLowerCase()

    if(basketball[ballerName]) {
        res.json(basketball[ballerName])
    } else {
        res.json(basketball['error'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})
