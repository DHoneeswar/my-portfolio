const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

// Middleware
app.use(cors()); // allow all origins
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('📬 Received contact:', name, email, message);

  // Send response with `success: true`
  res.status(200).json({ success: true, message: 'Message received!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
