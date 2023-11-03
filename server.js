const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from the server!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/api', (req, res) => {
  res.send('Hello World from the API!');
});

const mongoose = require('mongoose');

// password = 7qnxnsgUXDzAVA2f
// Replace `<username>`, `<password>`, and `<your-database>` with your MongoDB credentials
const mongoURI = 'mongodb+srv://adamtpangelinan:7qnxnsgUXDzAVA2f@coderoad-cluster.e2mqbt6.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
