import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom';
import Localizacao from './views/Localizacao';
import Roteiro from './views/Roteiro';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/localizacao" exact={true} component={Localizacao} />
          <Route path="/roteiro/:id" component={Roteiro} />
        </Switch>
      </div>
    );
  }
}

export default App;
