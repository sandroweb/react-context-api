import React from 'react';
import './App.css';
import Column1 from './columns/Column1';
import Column2 from './columns/Column2';
import Column3 from './columns/Column3';

function App() {
  return (
    <div className="App">
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

export default App;
