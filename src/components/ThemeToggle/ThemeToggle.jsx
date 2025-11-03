import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(null);

  // Set initial theme based on localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDark(storedTheme === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Apply dark class on <html> when isDark changes (once not null)
  useEffect(() => {
    if (isDark === null) return; // wait for initial theme detection

    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Listen for system dark mode changes if no user preference
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      const storedTheme = localStorage.getItem('theme');
      if (!storedTheme) {
        setIsDark(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (isDark === null) return null;

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="p-2 cursor-pointer text-xl"
    >
      {isDark === "dark" ? (
        <span title="Switch to dark mode">☀️</span>
      ) : (
        <span title="Switch to light mode">🌙</span>
      )}
      {/* {isDark ? '☀️ Light' : '🌙 Dark'} */}
    </button>
  );
};

export default ThemeToggle;