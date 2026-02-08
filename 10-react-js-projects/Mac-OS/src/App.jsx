import { useState } from 'react';
import './App.scss';
import Doc from './components/Doc';
import Nav from './components/Nav';
import Cli from './components/windows/Cli';
import Github from './components/windows/Github';
import Note from './components/windows/Note';
import Resume from './components/windows/Resume';
import Spotify from './components/windows/Spotify';

const App = () => {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <main>
      <Nav />
      <Doc setWindowsState={setWindowsState} />
      {windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
      {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
    </main>
  );
}

export default App;