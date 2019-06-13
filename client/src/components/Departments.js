import React from "react";
import axios from "axios";
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

  deleteDept = (id) => {
    axios.delete(`/api/departments/${id}`)
    .then( res => {
        const { departments, } = this.state;
        this.setState({ departments: departments.filter(d => d.id !== id), })
      })
  }

  renderDepartments = () => {
    const { departments } = this.state

    if (departments.length <= 0)
      return <h3>No Departments</h3>
    return departments.map( department => (
      <>
      <h3>{ department.name }
      <Delete onClick={this.deleteDept}>X</Delete>
      </h3>
      </>
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
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  margin-left: 9%;
  margin-top: 3%;
  transition: background 0.4s ease;

  &:hover{
    background-color: #86BAB6;
    transition: background 0.4s ease;
  }
`

const Delete = styled.button`
  background-color: #F7E74F;
  border-radius: 100%;
  border: none;
  color: white;
  margin-left: .5%;

`

export default Departments;
