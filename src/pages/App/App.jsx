import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<WelcomePage user={user}/>}/>
        <Route path='/auth' element={<AuthPage user={user} setUser={setUser}/>} />
      </Routes>
    </main>
  );
}
