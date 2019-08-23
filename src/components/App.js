import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from './GlobalStyles';
import  Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import MainPage from './MainPage/MainPage.jsx';


function App() {
  return (
  <>
    <GlobalStyles />
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />      
      </Switch>
    <Footer />
    </Router>  
  </>
  );
}

export default App;