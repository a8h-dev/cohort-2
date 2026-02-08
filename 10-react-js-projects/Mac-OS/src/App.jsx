import './App.scss';
import Doc from './components/Doc';
import Nav from './components/Nav';
import Github from './components/windows/Github';
import Note from './components/windows/Note';

const App = () => {
  return (
    <main>
      <Nav />
      <Doc />
      <Github />
      <Note />
    </main>
  );
}

export default App;