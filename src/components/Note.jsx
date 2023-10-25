/* eslint-disable react/prop-types */
import { useState } from "react";

const Note = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(note.id, editedNote);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <div>
          <br />
          <textarea
            rows="2"
            cols="30"
            value={editedNote.text}
            onChange={(e) =>
              setEditedNote({ ...editedNote, text: e.target.value })
            }
            className="border-black rounded-lg bg-blue-100"
          />
          <br />
          <button onClick={handleSaveClick} className="bg-blue-300">
            Save
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="rounded-lg border-black">{note.text}</p>
          <div className="flex flex-row justify-center gap-5">
            <button onClick={handleEditClick} className="bg-blue-300">
              Edit
            </button>
            <button onClick={() => onDelete(note.id)} className="bg-blue-300">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
