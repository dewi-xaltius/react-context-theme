import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
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
