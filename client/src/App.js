import React from 'react';
import { AppDiv } from './AppStyles';
// import './App.css';
import GetPlayers from './components/GetPlayers';

function App() {
  return (
    <AppDiv>
      <div className='main'>
        <GetPlayers />
      </div>
    </AppDiv>
  );
}

export default App;
