import React from 'react'
import styled from 'styled-components'

class DepartmentForm extends React.Component {

  render(){
    return(
      <>
      <h1>New Department Form</h1>
      <form>
        <label for="name">
        <span>Name of Department: </span>
        <StyledInput
        placeholder="Name"
        >
        </StyledInput>
        </label>
      </form>
      </>
    )
  }
}

const StyledInput = styled.input `
  padding: 1em;
  border-radius: 7px;
  width: 16%;
  margin-left: 20px;
`

export default DepartmentForm