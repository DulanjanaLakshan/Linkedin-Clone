import './App.css'
import { Routes, Route, Link } from "react-router-dom";

import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Login/>}/>
    </Routes>
  );
}

export default App;
