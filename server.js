const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Vocabulary API endpoint
app.get('/api/vocabulary', (req, res) => {
    res.json({ message: 'Vocabulary data' });
});

// Grammar API endpoint
app.get('/api/grammar', (req, res) => {
    res.json({ message: 'Grammar data' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});