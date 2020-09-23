const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define pathss for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setupe static directory to serve
app.use(express.static(publicDirectoryPath))



app.get('', (req, res) => {
  res.render('index', {
    title: 'Weatheer App',
    name: 'Phillip Lai'
  })
})

//code below is not being used and is replaced with app.use()
// app.get('', (req, res) => {
//     res.send('<h1>Hello express!</h1>')
// })

app.get('/help', (req, res) => {
    res.render('help', {
      helpText: "This is some helpful text",
      title: "Help",
      name: "Phillip Lai"
    })
})

app.get('/about', (req, res) => {
    res.render("about", {
      title: 'About Me',
      name: 'Phillip Lai'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: "It is sunny",
        location: "Fremont",
        weather: "100 F"
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Phillip Lai',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Phillip Lai',
        errorMessage: 'Page not found.'
    })
})



// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000!')
})
