const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Import routes
const vocabularyRoutes = require('./routes/vocabulary');
const grammarRoutes = require('./routes/grammar');

// Use routes
app.use('/api/vocabulary', vocabularyRoutes);
app.use('/api/grammar', grammarRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to English Learning Website');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
