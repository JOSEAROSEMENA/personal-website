import React from 'react';
import './App.css';
import Header from './components/layout/Header';

function App() {
  return (
    <div className="App">
    <Header />
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Welcome to my personal website. I'm a software engineer passionate about building web applications.</p>
        </section>
        <section id="projects">
          <h2>My Projects</h2>
          <p>Here are some projects I've worked on...</p>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <p>Get in touch...</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Jose Arosemena. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;