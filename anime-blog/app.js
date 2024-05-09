const express = require('express');
const app = express();

app.use(express.static('public'));  // Added to start the index.html for as a main page

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
