import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'
import Footer from './components/FooterComponents/Footer'


const App = () => {
  return (
    <a href="https://www.reactjs.org">
    <div class="container">
      <div class="AppContainer">
        <HeaderContainer />
        <CardContainer />
        <Footer />
      </div>
    </div>
    </a>
  );
};

export default App;
