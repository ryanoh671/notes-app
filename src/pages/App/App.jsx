import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import NotesPage from '../../components/NewNoteForm/NewNoteForm';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<WelcomePage user={user}/>}/>
        <Route path='/auth' element={<AuthPage user={user} setUser={setUser}/>} />
        <Route path='/notes' element={<NotesPage user={user} setUser={setUser}/>} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}
