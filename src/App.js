import logo from './BoraCeci.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome To My Portfolio! 
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          My name is Bora and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/BoraCeci"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
