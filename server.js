const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/index");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//API Route
app.use('/api', apiRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.envMONGODB_URI || "mongodb://localhost/googlebooks")

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});