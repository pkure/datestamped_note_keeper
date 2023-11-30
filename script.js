document.addEventListener("DOMContentLoaded", function () {
  loadNotes(); // Load notes when the page loads
});

document
  .getElementById("new-note")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addNote();
    }
  });

function addNote() {
  const noteElement = document.getElementById("new-note");
  const note = noteElement.value;
  noteElement.value = "";

  if (note.length < 2) {
    return alert("Please include more text to create a note.");
  }

  const list = document.getElementById("list");
  const li = document.createElement("li");
  const timestamp = new Date().toLocaleString();
  const noteText = `${note} - ${timestamp}`;

  li.appendChild(document.createTextNode(noteText));
  list.appendChild(li);

  saveNoteToLocalStorage(noteText); // Save the note to local storage
}

function saveNoteToLocalStorage(note) {
  let notes = [];
  if (localStorage.getItem("notes")) {
    notes = JSON.parse(localStorage.getItem("notes"));
  }
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const list = document.getElementById("list");
  list.innerHTML = ""; // Clear existing notes

  if (localStorage.getItem("notes")) {
    const notes = JSON.parse(localStorage.getItem("notes"));
    notes.forEach((note) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(note));
      list.appendChild(li);
    });
  }
}
