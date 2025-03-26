import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/card/card';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/job/:id" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
