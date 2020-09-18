//weather API Access Key: 1e8ce882e4db9166954c3e5f881e3081
const geocode = require('./utils/geocode')
const request = require('request')    
const forecast = require('./forecast')

const address = process.argv[2]

const url = 'http://api.weatherstack.com/current?access_key=1e8ce882e4db9166954c3e5f881e3081&query=37.8267,-122.4233&units=m'
const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGhpbGxpcDg4MDgiLCJhIjoiY2tkbWN5dzF4MHNyNzJ5a3l6bGpuMnVzOCJ9.e94caf4Xh6VpCA0xjrdTug'


if (!address){
    console.log('Please provide an address')
} else{

    geocode(address, (error, { latitude, longitude, location} = {} ) => {
        if (error) {
            return console.log("Error: " + error)
        }

        forecast(latitude, longitude,  (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}

