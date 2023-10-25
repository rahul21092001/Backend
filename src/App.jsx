import "./App.css";
import ApiData from "./components/ApiData";
import { useState } from "react";
import Note from "./components/Note";
import JTask from "./components/JTask";
import Throttling from "./components/Throttling";
function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim() === "") return;
    const newNoteObj = {
      id: Date.now(),
      text: newNote,
    };
    setNotes([...notes, newNoteObj]);
    setNewNote("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id, editedNote) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: editedNote.text } : note
      )
    );
  };

  return (
    <div className="text-center">
      <ApiData />
      <br />

      <h1 className="font-bold text-blue-500">Note Taking App</h1>
      <br />
      <div className="flex flex-row justify-center gap-4">
        <textarea
          rows="2"
          cols="30"
          placeholder="Enter your note here....."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="border-black rounded-lg bg-blue-100"
        />
        <button onClick={addNote} className="bg-blue-300">
          Add Note
        </button>
      </div>
      <div>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        ))}
      </div>
      <br />
      <hr className="h-0.5 bg-gray-500 " />
      <br />

      <h4 className="font-bold">
        (1)click on mouse and see console for output
      </h4>
      <Throttling />
      <hr className="h-0.5 bg-gray-500 " />

      <div className="mt-3 mb-3">
        <h1 className="font-bold ">Retryable API Call Example</h1>
        <br />
        <JTask maxretry={3} />
      </div>
      <hr className="h-0.5 bg-gray-500 " />
    </div>
  );
}

export default App;
