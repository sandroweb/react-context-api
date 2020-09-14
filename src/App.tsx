import React from 'react';
import './App.css';
import Column1 from './columns/Column1';
import Column2 from './columns/Column2';
import Column3 from './columns/Column3';

export enum Color {
  LightYellow = 'lightyellow',
  Purple = 'purple',
  Red = 'red',
  Green = 'green',
  Cyan = 'cyan',
  Black = 'black',
  White = 'white',
}

export const getColorByBgColor = (bgColor: Color): Color => {
  switch(bgColor) {
  case Color.LightYellow:
  case Color.Cyan:
    return Color.Black;
  default:
    return Color.White;
  }
}

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
