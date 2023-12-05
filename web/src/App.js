import React from 'react';

import Header from './components/header';
import Routes from './routes';

import './global.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
    </div>
  );
}

export default App;
