import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'

const App = () => {
  return (
    <div class="container">
      <div class="AppContainer">
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
