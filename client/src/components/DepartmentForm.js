import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

class DepartmentForm extends React.Component {
  state = {name: ""}

  handleChange = (e) => {
    this.setState({ name: e.target.value, })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const department = { ...this.state, };
    axios.post("/api/departments", department)
    .then( res => {
      this.props.history.push("/departments");
    })
    this.setState({name: "" });
  }

  render() {
    return (
      <>
        <h1>New Department Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="name">
            <span>Name of Department: </span>
            <StyledInput
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label for="submit">
            <StyledSubmit type="submit" />
          </label>
          <Link to="/departments">
            <StyledBack>Back</StyledBack>
          </Link>
        </form>
      </>
    );
  }
}
const StyledSubmit = styled.input`
  padding: 1em;
  background-color: #74a19d;
  border-radius: 7px;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 5px;
  transition: background 0.4s ease;
  border: none;


  &:hover {
    background-color: #86BAB6;
    transition: background 0.4s ease;

  }
`;


const StyledBack = styled.button`
  padding: 1em;
  background-color: #bab2b5;
  border-radius: 7px;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 5px;
  border: none;

  &:hover {
    background-color: #878284;
    transition: background 0.4s ease;

  }
`;

const StyledInput = styled.input`
  padding: 1em;
  border-radius: 7px;
  width: 16%;
  margin-left: 20px;
`;

export default DepartmentForm;
