const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let items = [];

// Get all items
app.get("/items", (req, res) => {
res.json(items);
});

// Add item
app.post("/add-item", (req, res) => {
const item = req.body;
items.push(item);
res.json({ message: "Item added successfully" });
});

// Delete item
app.delete("/delete-item/:index", (req, res) => {
const index = req.params.index;
items.splice(index, 1);
res.json({ message: "Item deleted successfully" });
});

// Root route (optional)
app.get("/", (req, res) => {
res.send("Backend is running 🚀");
});

// Start server
app.listen(3000, () => {
console.log("✅ Server running at http://localhost:3000");
});
