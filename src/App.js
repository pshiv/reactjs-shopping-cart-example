import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router

} from "react-router-dom";

import RootRouter from "./route";

function App() {
  return (
    <React.Fragment>
      <Router>
        <RootRouter />
      </Router>
    </React.Fragment>
  );
}

export default App;
