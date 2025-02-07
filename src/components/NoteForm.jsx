import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addNote(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">  

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add Note
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
