// src/App.js
import React, { useState } from 'react';

import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import HeadlinesList from './HeadlinesList';
import DetailScreen from './DetailScreen';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <h1>News Best</h1>
        <Routes>
          <Route
            path="/"
            element={<HeadlinesList setSelectedArticle={setSelectedArticle} />}
          />
          <Route
            path="/detail"
            element={<DetailScreen article={selectedArticle} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
