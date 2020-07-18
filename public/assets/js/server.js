// // const http = require("http");
const express = require("express");
const path = require("path");
// // const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const server = http.createServer(handleRequest);

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "./index.html"));
// });


// // // Sets up the Express app to handle data parsing
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());


// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "./notes.html"));
//   });



// app.get("/api/notes", function (req, res) {
//     return res.json(notes)
// });


// app.post("/api/notes", function (req, res) {}

// //     let newNote = req.body;
// //     // if (notes.length ) {
// //     //     notes.push(newNote);
// //     //     res.json(false);
// //     // // } else {
// //     // //     notes.push(newNote);
// //     // //     res.json(true);
// //     // // }
// // });

// app.listen(PORT, function () {
//     console.log("App listening on PORT: " + PORT);
// });