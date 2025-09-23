const addNoteBtn = document.getElementById("addNote");
const noteText = document.getElementById("noteText");
const notesList = document.getElementById("notesList");

// Load saved notes from localStorage
window.onload = function() {
  let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach(note => addNoteToList(note));
};

// Add note event
addNoteBtn.addEventListener("click", () => {
  const text = noteText.value.trim();
  if (text) {
    addNoteToList(text);
    saveNote(text);
    noteText.value = "";
  } else {
    alert("Please write something before adding a note.");
  }
});

// Function to add note in UI
function addNoteToList(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = function() {
    li.remove();
    removeNote(text);
  };

  li.appendChild(deleteBtn);
  notesList.appendChild(li);
}

// Save note in localStorage
function saveNote(text) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(text);
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Remove note from localStorage
function removeNote(text) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.filter(note => note !== text);
  localStorage.setItem("notes", JSON.stringify(notes));
}