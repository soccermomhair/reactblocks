import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
import Restof from './Components/Restof';

function App() {
  return (
    <div className="app">
      <Header />
      <Restof>
        <Navigation />
        <Main >
          <SubContents />
          <SubContents />
          <SubContents />
          <Advertisement />
        </Main>
      </Restof>
    </div>
  );
}

export default App;

