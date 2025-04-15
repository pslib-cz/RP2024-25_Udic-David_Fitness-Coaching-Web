import React, { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false); 

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    } else if (storedTheme === 'light') {
      setDarkMode(false);
    } else {
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkMode);
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]); 
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className={styles.themeToggleButton} onClick={toggleDarkMode}>
      {darkMode ? <BsSun size="20" color="white"/> : <BsMoonStarsFill size="20" />}
    </button>
  );
};

export default ThemeToggle;