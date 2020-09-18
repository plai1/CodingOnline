const path = require('path')
const express = require('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')


app.use(express.static(publicDirectoryPath))


//code below is not being used and is replaced with app.use()
// app.get('', (req, res) => {
//     res.send('<h1>Hello express!</h1>')
// })

app.get('/help', (req, res) => {
    res.send([{
        name: 'Phillip'
    }, {
        name: 'Andrew'
    }])
})

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.get('/weather', (req, res) => {
    res.send({
        location: "Fremont",
        weather: "100 F"
    })
})





// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000!')
})