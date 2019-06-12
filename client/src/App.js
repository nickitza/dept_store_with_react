import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Departments from './components/Departments'


const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/about" component={ About }/>
        <Route exact path="/departments" component={ Departments }/>
        <Route component={ NoMatch }/>
      </Switch>
    </div>
)

export default App;
