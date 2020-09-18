const fs = require('fs')
const { userInfo } = require('os')

//const book = {
//    title: 'Harry Potter',
//    author: 'J.K. Rowling'
//}

//const bookJSON = JSON.stringify(book);
//fs.writeFileSync('1-json.json', bookJSON)


//const dataBuffer = fs.readFileSync('1-json.json')
//const dataJSON = dataBuffer.toString();
//const data = JSON.parse(dataJSON)

//console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Phillip'
data.age = 19

const newJSONdata = JSON.stringify(data)
fs.writeFileSync('1-json.json', newJSONdata)

console.log(data)
