const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

// Handle the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// const express = require('express');
// const dotenv = require('dotenv');
// const path = require('path');

// // Load environment variables from .env file
// dotenv.config();

// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Serve static files (e.g., HTML, CSS, JS) from the current directory
// app.use(express.static(path.join(__dirname)));

// // Route to serve your main HTML page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // New route to handle RFID UID
// app.post('/store-uid', (req, res) => {
//   const { uid } = req.body;

//   if (!uid) {
//     return res.status(400).send('UID is required');
//   }

//   // Log the received UID
//   console.log(`Received UID: ${uid}`);

//   // Store the UID in the environment variable (or handle it as needed)
//   process.env.RFID_UID = uid;

//   // Respond with a success message
//   res.send(`UID ${uid} stored successfully!`);
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
