import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App app-shell">
        <Header />
        <main>
          <About />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
