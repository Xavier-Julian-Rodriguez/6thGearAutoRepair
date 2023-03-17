import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
