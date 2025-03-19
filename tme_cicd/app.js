const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! This is a CI/CD demonstration application.');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Application started on port ${port}`);
}); 