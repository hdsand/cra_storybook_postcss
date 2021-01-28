import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from 'pages/IndexPage';
import SecondPage from 'pages/SecondPage';
import 'App.css';

const App: React.VoidFunctionComponent = () => {
  return (
    <div className="App">
      <h1>cms</h1>
      <Router>
        <Switch>
          <Route path="/second" component={SecondPage} />
          <Route path="/" component={IndexPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
