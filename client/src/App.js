import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Departments from "./components/Departments";
import DepartmentForm from "./components/DepartmentForm"
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import styled from 'styled-components';


const App = () => (
<>
  <header>
    <div className="container">
      <Navbar />
    </div>
  </header>
      <hr className="styled" />
  <StyledContent>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/departments" component={ Departments } />
        <Route exact path="/departments/new" component={ DepartmentForm } />
        <Route component={NoMatch} />
      </Switch>
  </StyledContent>
</>
);

const StyledContent = styled.div`
  margin: 2em;
`

export default App;
