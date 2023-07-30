// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Game from './components/Game';
import Stats from './components/Stats';
import Login from './components/Login';

const App: React.FC = () => {
  const userId = ''; // Replace 'user-id' with the actual user ID (you can get it from authentication)

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Play Game</Link>
            </li>
            <li>
              <Link to="/stats">User Stats</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              /* Replace with your authentication logic to determine whether to render the Game or Stats component */
              userId ? <Game /> : <Login />
            }
          />
          <Route path="/stats" element={<Stats userId={userId} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
