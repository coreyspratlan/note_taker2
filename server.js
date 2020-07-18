const express = require("express");
const path = require("path");
// const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;

// const noteList = [];
// const noteId = [];

// const server = http.createServer(handleRequest);

// Sets up the Express app to handle data parsing
app.use(express.static('public'));
app.use(express.json());

// HTML Routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});


// API Routes
app.get("/api/notes", function (req, res) {
    return res.json(note);
});


app.post("/api/notes", function (req, res) {
    note.push(req.body);
    res.json(true);
 });

// //     let newNote = req.body;
// //     // if (notes.length ) {
// //     //     notes.push(newNote);
// //     //     res.json(false);
// //     // // } else {
// //     // //     notes.push(newNote);
// //     // //     res.json(true);
// //     // // }
// // });

app.listen(PORT, function () {
    console.log("App listening on PORT: ", PORT);
});