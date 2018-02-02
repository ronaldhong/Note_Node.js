
////Simple JSON type conversion. 
const fs = require('fs');
var originalNote={
  title: "Some Title",
  body: "Some body"
};
var originalNote_string = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNote_string);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
