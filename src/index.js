import React from "react";
import ReactDOM from "react-dom";
//import { GlobalStyles } from './GlobalStyles';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import MainPage from './components/MainPage/MainPage';
import App from './components/App';

// const App = () => {
//   return (
//   <>
//     <GlobalStyles />
//     {/* <Router>
//     <Header />
//       <Switch>
//         <Route exact path="/" component={MainPage} />      
//       </Switch>
//     <Footer />
//     </Router>   */}
//   </>
//   );
// }

ReactDOM.render(<App />, document.querySelector("#root"));