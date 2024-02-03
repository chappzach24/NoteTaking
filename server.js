const express = require("express");
const app = express();
const path = require('path')
const PORT = process.env.port || 3001;


//For landing page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'Develop/public/index.html'))
});

//For notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, 'Develop/public/notes.html'))
});

//
app.get('/', (req, res) => {
 
});

//PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
