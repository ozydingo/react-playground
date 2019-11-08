import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import logo from './logo.svg';
import './App.css';

// import CascadeParent from 'components/cascade/Parent';
import Activatable from 'Activatable';
import DropZone from 'components/dropzone/DropZone';
import PlayingWithChildren from 'components/playing-with-children/PlayingWithChildren';
import LatchkeyKid from 'components/playing-with-children/LatchkeyKid';
import SimpleComponent from 'components/rendering/SimpleComponent';
import StubbornState from 'components/stubborn-state/StubbornState';
import UnmountedState from 'components/unmounted-state/IsolateFetch';
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
      <main className={css(styles.main)}>
        <Activatable name="Playing With Children">
          <div className={css(styles.playingWithChildren)}>
            <PlayingWithChildren />
          </div>
        </Activatable>
        <Activatable name="SimpleComponent">
        <div style={{display: "none"}}>
          <SimpleComponent obj={{a: 1, b: 2}} />
        </div>
        </Activatable>
        <Activatable name="UnmountedState">
        <div>
          <UnmountedState />
        </div>
        </Activatable>
        <Activatable name="Drop Zone">
        <div>
          <DropZone />
        </div>
        </Activatable>
        {/*
        <Activatable name="Cascade Parent">
          <CascadeParent />
        </Activatable>
        */}
        <Activatable name="Stubborn State">
          <StubbornState />
        </Activatable>
        <Activatable name="Latchkey Kid">
          <LatchkeyKid />
        </Activatable>
      </main>
    </div>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  playingWithChildren: {
    width: "200px",
  }
})

export default App;
