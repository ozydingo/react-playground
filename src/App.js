import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import logo from './logo.svg';
import './App.css';

import PlayingWithChildren from 'components/playing-with-children/PlayingWithChildren';

library.add(fab, fas);

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
