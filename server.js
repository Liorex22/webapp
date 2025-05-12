const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // You can also use '.' if your files are in the root

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
