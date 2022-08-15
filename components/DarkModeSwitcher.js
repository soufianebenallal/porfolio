import React, { useEffect, useState, useCallback } from 'react';
import { MoonIcon, SunIcon } from './ThemesIcon';

export default function DarkModeSwitcher() {
  const [enabled, setEnabled] = useState(true);
  /**
   * @requires
   * @param {boolean} enabled
   *
   */
  const toggleDarkMode = useCallback(() => {
    setEnabled((v) => {
      const newValue = !v;
      if (newValue) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
      return newValue;
    });
  }, []);
  useEffect(() => {
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    if (isDark) {
      document.documentElement.classList.add('dark');
      enabled === false && setEnabled(true);
    } else {
      document.documentElement.classList.remove('dark');
      enabled === true && setEnabled(false);
    }
  }, [enabled]);
  return (
    <button
      onClick={toggleDarkMode}
      className={`${
        !enabled ? 'text-gray-900 ' : 'text-gray-100 '
      } relative inline-flex items-center -mr-[9px] `}
    >
      {enabled ?  <SunIcon />: <MoonIcon />}
    </button>
  );
}
