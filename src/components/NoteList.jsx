import { useState } from "react";
import Note from "./Note";
import "bootstrap/dist/css/bootstrap.min.css";

const NoteList = ({ notes, deleteNote }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 5;

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  const totalPages = Math.ceil(notes.length / notesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="row">
        {currentNotes.map((note) => (
          <div key={note.id} className="col-md-4">
            <Note note={note} deleteNote={deleteNote} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination-container">
          <button className="btn btn-outline-primary me-2" onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span className="text-muted"> Page {currentPage} of {totalPages} </span>
          <button className="btn btn-outline-primary ms-2" onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteList;
