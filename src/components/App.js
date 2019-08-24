import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from './GlobalStyles';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import MainPage from './MainPage/MainPage.jsx';
import Add from './Add/Add.jsx';
import Episode from './MainPage/Episode/Episode.jsx';

function App() {
  return (
  <>
    <GlobalStyles />
    <Router>
    <Header />
      <Switch>
        <Route path="/mainpage" component={MainPage} />      
        <Route path="/" component={Episode}/>
      </Switch>
    <Add />
    <Footer />
    </Router>  
  </>
  );
}

export default App;