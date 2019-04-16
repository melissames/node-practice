const fs = require('fs')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes)
        console.log('new note added')
    } else {
        console.log('note title taken')
    }    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter((note) => note.title !== title)
    saveNotes(filteredNotes)
    console.log('note removed')
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })    
}

const readNote = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find((note) => note.title === title)

    if(foundNote){
        console.log(foundNote.body)
    } else {
        console.log('no note found')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
   
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}