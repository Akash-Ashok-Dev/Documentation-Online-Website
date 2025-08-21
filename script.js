const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");
const noteModal = document.getElementById("noteModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.textContent = note.title;
    noteDiv.onclick = () => openNote(note);
    notesList.appendChild(noteDiv);
  });
}

function openNote(note) {
  modalTitle.textContent = note.title;
  modalBody.textContent = note.body;
  noteModal.style.display = "block";
}

addBtn.onclick = () => {
  const title = prompt("Enter note title:");
  const body = prompt("Enter note body:");
  if (title && body) {
    notes.push({ title, body });
    saveNotes();
    renderNotes();
  }
};

closeModal.onclick = () => {
  noteModal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === noteModal) {
    noteModal.style.display = "none";
  }
};

renderNotes();
