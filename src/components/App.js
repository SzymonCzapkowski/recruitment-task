import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from './GlobalStyles';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Add from './Add/Add.jsx';


function App() {
  return (
  <>
    <GlobalStyles />
    <Router>
    <Header />
    <Add />
    <Footer />
    </Router>  
  </>
  );
}

export default App;