import React from 'react';
import './App.css';
import Routes from "./routes/routes";
import GlobalState from './context/GlobalState';

function App() {
  return (
    <div>
      <GlobalState>
        <Routes />
      </GlobalState>
    </div>
  );
}

export default App;
