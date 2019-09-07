import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import logo from './logo.svg';
import './App.css';

import PlayingWithChildren from 'components/playing-with-children/PlayingWithChildren';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A React Playground
        </p>
      </header>
      <main>
        <div className={css(styles.playingWithChildren)}>
          <PlayingWithChildren />
        </div>
      </main>
    </div>
  );
}

const styles = StyleSheet.create({
  playingWithChildren: {
    width: "200px",
  }
})

export default App;
