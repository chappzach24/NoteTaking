const express = require("express");
const api = require('./routes/api.js');
const app = express();
const path = require('path')
const PORT = process.env.port || 3001;
//const uuid = require('uuid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', api);

//For notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'))
});

//For landing page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});


//PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
