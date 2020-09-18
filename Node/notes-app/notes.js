const fs = require('fs')
const chalk = require('chalk') 


const notes = () => {
    console.log("Your notes...")
}

//adds notes and checks if title of a note is already in json file
const addNote = (title, body) => {
    const notes = loadNotes() 
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
}


//find note
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("No note was found!"))
    }
}


//add JSON version of notes into JSON file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}



//convert JSON data into dictionary object 
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    } catch (e) {
        return []
    }
}


// remove any notes
const removeNote = function(title, body) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => {
        return note.title !== title 
    })
    if (notes.length === notesToKeep.length){
        console.log(chalk.red.inverse("No note found!"))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Note has been removed!"))
    }
}


const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}


module.exports = {
    notes: notes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}