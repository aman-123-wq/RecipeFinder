const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock database - no MySQL needed!
const mockRecipes = [
    {id: 1, title: 'Masala Dosa', ingredients: 'rice, potatoes, spices', instructions: 'Make batter, cook dosa', cooking_time: 20, difficulty: 'Medium'},
    {id: 2, title: 'Butter Chicken', ingredients: 'chicken, butter, cream, tomatoes', instructions: 'Cook chicken in butter gravy', cooking_time: 45, difficulty: 'Medium'},
    {id: 3, title: 'Chocolate Cookies', ingredients: 'flour, chocolate, sugar', instructions: 'Mix and bake', cooking_time: 25, difficulty: 'Easy'}
];

const mockUsers = [];

// Recipe routes
app.get('/api/recipes', (req, res) => {
    res.json(mockRecipes);
});

app.get('/api/recipes/:id', (req, res) => {
    const recipe = mockRecipes.find(r => r.id == req.params.id);
    res.json(recipe || {error: 'Recipe not found'});
});

// User registration (mock)
app.post('/api/register', (req, res) => {
    const {email, password, name} = req.body;
    const user = {id: mockUsers.length + 1, email, name};
    mockUsers.push(user);
    res.json({message: 'User registered successfully', user});
});

// User login (mock)
app.post('/api/login', (req, res) => {
    const {email, password} = req.body;
    res.json({message: 'Login successful', user: {email, name: 'Test User'}});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log('📊 Mock database ready - no MySQL needed!');
});