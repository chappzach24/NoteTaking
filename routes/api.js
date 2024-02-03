const notes = require('express').Router();
const fs = require('fs');
const { readFromFile, readAndAppend } = require('../helpers/reading');
const uuid = require('../helpers/uuid');

notes.get('/notes', (req, res) =>{
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

// POST Route for a new UX/UI tip
notes.post('/notes', (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
     title,
     text,
      id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding tip');
  }
});



// notes.delete('/notes/:id', (req, res)=> {

// })

notes.delete('/notes/:id', (req, res) => {
  const noteIdToDelete = req.params.id;
  readFromFile('./db/db.json').then((data) => {
    let allNotes = JSON.parse(data);

    // Filter the notes using array filter method
    const filteredNotes = allNotes.filter((note) => note.id !== noteIdToDelete);

    // Write the filtered notes back to the file
    fs.writeFileSync('./db/db.json', JSON.stringify(filteredNotes));

    res.json(`Note with ID ${noteIdToDelete} deleted successfully`);
  });
});


module.exports = notes