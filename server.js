const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage (replace with database in production)
let donations = [
  {
    id: 1,
    name: "John Mwangi",
    amount: 5000,
    category: "Education",
    date: "2024-01-15T10:30:00Z",
    phone: "+254712345678"
  },
  {
    id: 2,
    name: "Sarah Wanjiku",
    amount: 2500,
    category: "Healthcare",
    date: "2024-01-14T14:20:00Z",
    phone: "+254798765432"
  },
  {
    id: 3,
    name: "David Otieno",
    amount: 10000,
    category: "General",
    date: "2024-01-13T09:15:00Z",
    phone: "+254723456789"
  },
  {
    id: 4,
    name: "Mary Achieng",
    amount: 3000,
    category: "Food",
    date: "2024-01-12T16:45:00Z",
    phone: "+254734567890"
  },
  {
    id: 5,
    name: "Peter Kipchoge",
    amount: 7500,
    category: "Shelter",
    date: "2024-01-11T11:00:00Z",
    phone: "+254745678901"
  }
];

// API Routes
app.get('/api/donations', (req, res) => {
  res.json(donations);
});

app.post('/api/donations', (req, res) => {
  const { name, amount, category, phone } = req.body;
  
  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Valid amount is required' });
  }

  const donation = {
    id: Date.now(),
    name: name || 'Anonymous',
    amount: parseFloat(amount),
    category: category || 'General',
    date: new Date().toISOString(),
    phone: phone || '+254713370833'
  };

  donations.unshift(donation);
  res.status(201).json(donation);
});

app.get('/api/stats', (req, res) => {
  const total = donations.reduce((sum, d) => sum + d.amount, 0);
  const categories = donations.reduce((acc, d) => {
    acc[d.category] = (acc[d.category] || 0) + d.amount;
    return acc;
  }, {});

  res.json({
    total,
    count: donations.length,
    average: donations.length > 0 ? Math.round(total / donations.length) : 0,
    categories
  });
});

// Serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`OKOA Donation Platform running on http://localhost:${PORT}`);
});