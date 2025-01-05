const express = require("express");
const app = express();
const path = require("path");

// API Callback
app.get("/callback", (req, res) => {
    const accessToken = req.query.access_token;
    if (accessToken) {
        const redirectUnity = `unitydl://aurality?access_token=${accessToken}`;
        res.redirect(redirectUnity);
    } else {
        res.status(400).send("Access Token not found");
    }
});

// Serve HTML
app.use("/callback", express.static(path.join(__dirname, "callback")));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
