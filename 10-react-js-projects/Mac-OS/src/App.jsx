import './App.scss';
import Doc from './components/Doc';
import Nav from './components/Nav';
import Github from './components/windows/Github';
import Note from './components/windows/Note';
import Resume from './components/windows/Resume';

const App = () => {
  return (
    <main>
      <Nav />
      <Doc />
      <Github />
      <Note />
      <Resume />
    </main>
  );
}

export default App;