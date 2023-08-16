import { useState } from 'react';
import * as notesAPI from '../../utilities/notes-api';

export default function NotesPage() {
  const [formData, setFormData] = useState({
    date: new Date(),
    note: ''
  });
  const [note, newNote] = useState('');

  function handleChange(evt) {
    const newFormData = evt.target.value;
    setFormData(newFormData);
  }

  async function handleAddNote(evt) {
    evt.preventDefault();
    const allUserNotes = await notesAPI.createNote({
      note: formData
    });
    console.log(allUserNotes, 'allUserNotes')
    
  }


  return (
  <>  
    <h1>New Notes Page</h1>
    <form onSubmit={handleAddNote}>
      <label>Add Note:</label>  
      <input type="text" name='note' value={formData.note} placeholder="Type new note" onChange={handleChange}/>
      <button type="submit">Add Note</button>
    </form>  
  </>
  );
}