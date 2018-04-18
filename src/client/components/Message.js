import React from 'react'
import { darken } from 'polished'
import styled from 'styled-components'

const myBubblePrimary = '#AFFFC9'

const StyledMessage = styled.div`
  padding: 8px;
  border-radius: 4px;
  margin: 10px;
  position: relative;
  border: 1px solid ${darken(0.1, myBubblePrimary)};
  border-color: ${myBubblePrimary};
  background: ${myBubblePrimary};
  border-style: solid;
  border-width: 1px 0 1px;
  max-width: 70%;
  margin-left: auto;
  margin-right: 10px;
}`

const Message = ({ data }) => {
  return (
    <StyledMessage>
      {data.content}
    </StyledMessage>
  )
}

export default Message
