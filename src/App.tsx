import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './hooks/usePersistedState';

import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Header from './components/Header';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const MyApp: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
    console.log(theme);
  }, [setTheme, theme]);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
