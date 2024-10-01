import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  let backgroundColor;
  let textColor = 'black';
  if (theme === 'dark') {
    backgroundColor = 'black';
    textColor = 'white';
  } else if (theme === 'yellow') {
    backgroundColor = 'yellow';
  } else if (theme === 'pink') {
    backgroundColor = 'pink';
  } else {
    backgroundColor = 'white';
  }

  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button style={buttonStyle} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
