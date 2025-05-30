
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './pages/Register'
import Result from './pages/Result';
import Verify from './pages/Verify';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <>
      <Router>
<Navbar></Navbar>
<div className="app-container"></div>
      <Routes>
        <Route path="/" element={<Register />} />
        
        <Route path="/verify" element={<Verify />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
