import React from 'react';
import CounterApp from './CounterApp';
import ParentComponent from './ParentComponent';
import StyleChange from './StyleChange';

function App() {
  return (
    <div className="App">
      <CounterApp />
      <ParentComponent />
      <StyleChange />
    </div>
  );
}

export default App;
