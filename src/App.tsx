import React, { FunctionComponent } from 'react';
import './App.sass';
import { SnakeButton } from './components/snakeButton';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SnakeButton />
      </header>
    </div>
  );
};

export default App;
