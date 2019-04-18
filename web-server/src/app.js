const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Melissa Sames'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Melissa'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'What can I help you with?'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'sunny',
        location: 'New York'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})