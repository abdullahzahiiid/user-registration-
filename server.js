const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/register', (req, res) => {
  const { name, email } = req.body;
  const entry = `Name: ${name}, Email: ${email}\n`;
  fs.appendFile('data.txt', entry, err => {
    if (err) {
      return res.status(500).send('Failed to save');
    }
    res.send('Registered!');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
