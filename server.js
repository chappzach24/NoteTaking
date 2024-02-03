const express = require("express");
const app = express();
const path = require('path')
const PORT = process.env.port || 3001;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'Develop/public/index.html'))
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
