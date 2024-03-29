// import React from 'react';


// const ThemeToggleButton = () =>{
    
//     return (
//        <></>
//     )

// }
// export {ThemeToggleButton}


import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <button
      className={`btn btn-${theme} txt-${theme}`}
      id="global-theme-toggler"
      onClick={handleToggle}
    >
      {theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    </button>
  );
};

export { ThemeToggleButton };
