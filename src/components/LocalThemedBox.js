// import React from 'react';


// const LocalThemedBox = () => {

// return(
//     <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
//         {/* Write code below this line */}
        
//     </div>
// )
// }

// export { LocalThemedBox }

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div
      style={{ width: '200px', height: '200px', border: '2px solid green' }}
      id="local-themed-box"
      className={`bg-${theme}`}
    >
      <p id="local-themed-text-container" className={`txt-${theme}`}>
        Some Text
      </p>
      <button
        className={`btn btn-${theme}`}
        id="local-theme-toggler"
        onClick={handleToggle}
      >
        {theme === 'light' ? 'Toggle local theme to dark' : 'Toggle local theme to light'}
      </button>
    </div>
  );
};

export { LocalThemedBox };
