import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav';
import Circuits from './components/Circuits';
import DriversStandings from './components/DriversStandings';
import MainPage from './components/MainPage';

function App() {

  return (
    <Router className="main">
      <Nav />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/driversStandings' element={<DriversStandings />} />
        <Route path='/circuits' element={<Circuits />} />
      </Routes>
    </Router>
  )
}

export default App
