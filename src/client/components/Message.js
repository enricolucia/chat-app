import React from 'react'
import { darken } from 'polished'
import styled from 'styled-components'

const yourBubblePrimary = '#329cd4'
const myBubblePrimary = '#AFFFC9'

const StyledMessage = styled.div`
  padding: 8px;
  border-radius: 4px;
  margin: 10px;
  position: relative;
  border-style: solid;
  border-width: 1px 0 1px;
  max-width: 70%;

  :before {
    content: '';
    position: absolute;
    display: block;
    z-index: 1;
    border-style: solid;
  }

  ${props => props.data.own && `
    background: ${myBubblePrimary}
    margin-left: auto;
    margin-right: 10px;
    border: 1px solid ${darken(0.1, myBubblePrimary)};

    :before {
      border-width: 6px 0 6px 10px;
      border-color: transparent ${darken(0.1, myBubblePrimary)};
      right: -11px;
      bottom: 2px;
    }
  `}
  ${props => !props.data.own && `
    background: ${yourBubblePrimary}
    margin-right: auto;
    margin-left: 10px;
    border: 1px solid ${darken(0.1, yourBubblePrimary)};

    :before {
      border-width: 6px 10px 6px 0;
      border-color: transparent ${darken(0.1, yourBubblePrimary)};
      left: -11px;
      bottom: 2px;
    }
  `}
}`

const Message = ({ data, isCountdown }) => {
  return (
    <StyledMessage data={data}>
      {data.content}
    </StyledMessage>
  )
}

export default Message
