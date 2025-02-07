const Note = ({ note, deleteNote }) => {
    return (
      <div className="card note-card">
        <div className="card-body">
          <p className="card-text">{note.text}</p>
          <button className="btn btn-danger btn-sm" onClick={() => deleteNote(note.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default Note;
  