// server.mjs

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const key = process.env.SECRET_KEY

const app = express();
const port = process.env.PORT || 3000;

// Use import.meta.url to get the current module's URL
const __filename = fileURLToPath(import.meta.url);

// Use dirname to get the current module's directory name
const __dirname = dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'src' directory
app.use('/src', express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'about.html'));
});

// Create a route to handle API requests
app.get('/api/data', async (req, res) => {
  try {
    // Make a GET request to the API URL
    const response = await fetch(process.env.API_URI);
    const apiData = await response.json();

    res.json(apiData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
