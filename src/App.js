import React, {useState} from "react";
import './App.css';
import Main from "./components/Main/Main";

function App() {
  const [isStarted, setIsStarted]  = useState(false)
  
  const handleClick = () => {
    setIsStarted(!isStarted);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>
        {isStarted ? "End" : "Start"}
      </button>
      {
        isStarted ? <Main/> : <div className="intro">
          <h1>Welcome to Labirynt game :D</h1>
        </div>
      }
    </div>
  );
}

export default App;
