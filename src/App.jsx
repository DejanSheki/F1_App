import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav';
import Circuits from './components/Circuits';
import DriversStandings from './components/DriversStandings';
import MainPage from './components/MainPage';

function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', mouseMove);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
    },
    text: {
      x: mousePosition.x,
      y: mousePosition.y,
      cursor: 'pointer',
      width: 0
    }
  }

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return (
    <Router className="main">
      <Nav textEnter={textEnter} textLeave={textLeave} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/driversStandings' element={<DriversStandings />} />
        <Route path='/circuits' element={<Circuits />} />
      </Routes>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
    </Router>
  )
}

export default App
