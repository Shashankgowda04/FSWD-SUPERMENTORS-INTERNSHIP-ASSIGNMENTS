const express = require('express');
const app = express();
const PORT = 3000;

// Route 1: Home - Returns a simple HTML message
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Hello Server!</h1><p>Navigate to /hello or /status</p>');
});

// Route 2: Hello - Returns a JSON message
app.get('/hello', (req, res) => {
    res.json({
        message: "Hello! You have successfully reached the /hello route.",
        assignment: "Hello Server"
    });
});

// Route 3: Status - Returns server information
app.get('/status', (req, res) => {
    res.json({
        status: "Active",
        uptime: process.uptime().toFixed(2) + " seconds",
        message: "Server is running smoothly."
    });
});
// Dynamic Route: Greeting by Name
// The ":name" acts as a variable in the URL
app.get('/hello/:name', (req, res) => {
    const userName = req.params.name;
    res.json({
        message: `Hello, ${userName}! Welcome to your dynamic route.`,
        note: "This name was pulled directly from the URL!"
    });
});

// Catch-all Route for 404 Errors
app.use((req, res) => {
    res.status(404).send('<h2>404 - This route does not exist!</h2>');
});

app.listen(PORT, () => {
    console.log(`Hello Server is running at http://localhost:${PORT}`);
});