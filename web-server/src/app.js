const path = require('path')
const express = require('express')
const hbs = require('hbs')
const dotenv = require('dotenv')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()
dotenv.config()

//setup handlebars views location
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

//setup for static directories
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
        title: 'Help',
        name: 'Melissa',
        message: 'What can I help you with?'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide a address'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if(error){
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})