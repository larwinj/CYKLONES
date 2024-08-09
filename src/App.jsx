import React, { useState } from 'react';
import Prediction from './Components/Prediction';
import Page from './Components/Page';
import History from './Components/History'; 
import { ImageProvider } from './Components/ImageContext';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';

const App = () => {
  const [view, setView] = useState('home'); // State to manage the current view

  const handleViewChange = (section) => {
    setView(section); // Set the view based on the section clicked
  };

  return (
    <ImageProvider>
      <Navbar onViewChange={handleViewChange} /> {/* Pass the handler to Navbar */}
      {/* Render the components based on the current view */}
      {view === 'history' && <History />}
      {view === 'prediction' && <Prediction onViewMore={() => handleViewChange('pages')} />} {/* Trigger view change on View More */}
      {view === 'pages' && <Page />}
      {view === 'home' && <Home />}
      {view === 'login' && <Login   onViewMore={() => handleViewChange('home')} />}
    </ImageProvider>
  );
};

export default App;
