const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow front end to access server
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));

app.get('/search', (req, res) => {
    const { artists, releases } = req.body;
    return res.status(200).json({ artists: artists, releases: releases })
});

const PORT = process.env.port || 3002;

app.listen(PORT, () => console.log(`Server started on port ${ PORT }`));
