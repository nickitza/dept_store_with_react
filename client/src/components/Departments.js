import React, { useState, useEffect } from "react";
import axios from "axios";
import DepartmentForm from './DepartmentForm'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Departments extends React.Component {
  state = { departments: [] };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, });
      })
  }

  renderDepartments = () => {
    const { departments } = this.state

    if (departments.length <= 0)
      return <h3>No Departments</h3>
    return departments.map( department => (
      <h3>{ department.name }</h3>
    ))

  }

  render() {
    return (
      <>
        <h1>Departments Listing </h1>
        { this.renderDepartments() }
        <Link to="/departments/new">
        <StyledButton>
          Add department
        </StyledButton>
        </Link>
      </>
    );
  }
}

const StyledButton = styled.button`
  background-color: #74A19D;
  color: white;
  padding: 1em;
  border-radius: 10px;
  font-size: .8em;
`

export default Departments;
