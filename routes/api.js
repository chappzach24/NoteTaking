const notes = require('express').Router();
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



notes.delete('/notes/:id', (req, res)=> {
console.log(req.params.id);

})


module.exports = notes