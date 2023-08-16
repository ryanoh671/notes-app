import { useState } from 'react';

export default function NotesPage() {
  const [note, setNote] = useState('');
  return (
  <>  
    <h1>Notes Page</h1>
    <form>
      <label>Add Note:</label>  
      <input type="text" name='' />
    </form>  
  </>
  );
}