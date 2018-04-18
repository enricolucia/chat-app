import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledInput = styled.input`
  flex: 1 1 85%;
  padding: 0 10px;
  line-height: 40px;
  border: 0;
`

const StyledButton = styled.button`
  flex: 1;
  background: #265778;
  color: #FFFFFF;
  font-weight: bold;
  border: 0;
`

class MessageForm extends React.Component {
  render () {
    return (
      <FormContainer>
        <StyledInput type='text' />
        <StyledButton onClick={this.onSubmit}>
          {String.fromCharCode(8682)}
        </StyledButton>
      </FormContainer>
    )
  }
}

export default MessageForm
