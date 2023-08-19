import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './Components/Game'
import Login from './Components/Login'
import Register from './Components/Register';


function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App