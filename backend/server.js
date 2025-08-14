const express = require('express');
const cors = require('cors');
const jokeRoutes = require('./routes/joke');

const app = express();
const port = 3000;

app.use(cors());
app.use('/api/joke', jokeRoutes);

app.listen(port, () => console.log(`Backend démarré sur http://localhost:${port}`));
