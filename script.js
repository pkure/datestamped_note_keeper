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

  const noteText = document.createTextNode(`${note}   -   ${timestamp}`);
  const noteTimestamp = document.createElement("span");
  noteTimestamp.className = "timestamp";
  noteTimestamp.appendChild(noteText);

  li.appendChild(noteTimestamp);

  list.appendChild(li);
}
