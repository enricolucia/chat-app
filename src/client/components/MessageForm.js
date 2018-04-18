import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange () {
    this.setState({
      value: this.inputElement.value
    })
  }

  onSubmit (e) {
    if ((!e.keyCode || e.keyCode === 13) && this.inputElement.value) {
      this.props.onInteraction(this.state.value.trim())
      this.setState({
        value: ''
      })
    }
  }

  render () {
    const { value } = this.state
    return (
      <FormContainer>
        <StyledInput type='text'
          onChange={this.onChange}
          innerRef={ref => { this.inputElement = ref }}
          onKeyUp={this.onSubmit}
          value={value}
        />
        <StyledButton onClick={this.onSubmit}>
          {String.fromCharCode(8682)}
        </StyledButton>
      </FormContainer>
    )
  }
}

MessageForm.propTypes = {
  onInteraction: PropTypes.func
}

export default MessageForm
