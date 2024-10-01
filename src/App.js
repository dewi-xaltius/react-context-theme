import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className='App'>
        <h1>Theme Example</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
