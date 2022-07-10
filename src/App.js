import logo from './logo.svg';
import './App.css';
import Tutorial from './components/Tutorial';
import Comments from './components/Comments';
import Clock from './components/Clock';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100px" />
        header
      </header>

      <main className='container'>
        <h1>Welcome to React.js</h1>
        <Tutorial title="this is a title"></Tutorial>
        <Clock></Clock>
      </main>
    </div>
  );
}

export default App;
