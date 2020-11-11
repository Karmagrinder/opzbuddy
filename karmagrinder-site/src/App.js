import React from 'react';
import logo from './res/Float64Logo.svg';
import './App.css';
import OpzBuddy from './components/OpzBuddy/OpzBuddy'
import OpzBuddyPrivacyPolicy from './components/OpzBuddyPrivacyPolicy/OpzBuddyPrivacyPolicy'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Container className="navigation-container">
              <div><Link to='/' className="nav-link">OP-Z Buddy</Link></div>
              <div><Link to='/privacypolicy' className="nav-link">Privacy-policy</Link></div>
            </Container> 
          </div>
        </header>

        <hr />
        <Switch>
          <Route exact path='/'component={OpzBuddy} />
          <Route path= '/privacypolicy' component={OpzBuddyPrivacyPolicy} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
