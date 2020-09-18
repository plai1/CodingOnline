
const request = require('request')    

const forecast = (longi, lati, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1e8ce882e4db9166954c3e5f881e3081&query=' + lati + ',' + longi + '&units=m'
    
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to the weather serivce!", undefined)
        } else if (body.success === false){
            callback("The Inputed Coordinates are not valid!", undefined)
        } else{
            const weather = body.current
            const location = body.location
            callback(undefined, {
                Location: location.name + ", " + location.region + ". Country: " + location.country,
                Weather: weather.temperature,
                Description: weather.weather_descriptions
            })
        }
    })
}

module.exports = forecast;