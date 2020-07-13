//using props in class components

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Flirt from './components/Flirt';
import Hello from './components/Hello';
import JusticeLeague from './components/justiceLeague';
import Avengers from './components/avengers';
import Message from './components/message';
import Counter from './components/counter';
import EventHandler1 from './components/eventHandler1';
import EventHandler2 from './components/eventHandler2';
import EventBind from './components/eventBind';

function App() {
  return (
    <div className="App">
      <EventBind/>
      <EventHandler1/>
      <EventHandler2/>
      <Counter addValue="2"/>
      <Greet />
      <Flirt />
      <Hello />
      <JusticeLeague name="Clark" superHeroName="Superman" />
      <JusticeLeague name="Diana" superHeroName="Wonder Woman">
        <p>You look amazing Diana and your chemistry with Steve was so good !!</p>
      </JusticeLeague>
      <Avengers name="Tony Stark" superHeroName="Iron Man" />
      <Message />
    </div>
  );
}

export default App;
