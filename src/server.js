import express from 'express';

const app = express();

const PORT = process.env.PORT;

// Define a route on the server
app.get("/home", (req, res) => {
    res.status(200).send("Hello, from Express.js!");
});

// Start server on Port
app.listen(PORT, () => 
    console.log(`Server started on http://localhost:${PORT}`));
