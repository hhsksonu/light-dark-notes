import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // External CSS

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "First Note" },
    { id: 2, text: "Second Note" },
  ]);
  const [newNote, setNewNote] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Function to add a note
  const addNote = () => {
    if (newNote.trim() === "") return;
    const newNoteObj = { id: Date.now(), text: newNote };
    setNotes([...notes, newNoteObj]);
    setNewNote(""); // Clear input field
  };

  // Function to delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <div className="app-container">
      {/* Theme Toggle Button */}
      <button className="toggle-btn btn btn-primary" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Add Note Section */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button className="btn btn-success" onClick={addNote}>
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
