//getting information from server using only js provided module (HTTP/HTTPS module)
const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=1e8ce882e4db9166954c3e5f881e3081&query=45,-75&units=f';

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

})


request.on('error', (error) => {
    console.log('An error', error)
})

request.end()