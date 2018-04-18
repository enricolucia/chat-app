import React from 'react'
import Countdown from './Countdown'
import { darken } from 'polished'
import styled, { keyframes } from 'styled-components'

const yourBubblePrimary = '#329cd4'
const myBubblePrimary = '#AFFFC9'
const darkGrey = '#A9A9A9'

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`

const StyledMessage = styled.div`
  padding: 8px;
  border-radius: 4px;
  margin: 10px;
  position: relative;
  border-style: solid;
  border-width: 1px 0 1px;
  max-width: 70%;
  animation: ${props => props.data.own
    ? slideInFromRight
    : slideInFromLeft
  } 0.2s linear;

  ${props => props.data.highlighted && `font-size: 110%;`}
  ${props => props.data.faded && `opacity: 0.1;`}
  ${props => props.data.think && `color: ${darkGrey};`}

  :before {
    content: '';
    position: absolute;
    display: block;
    z-index: 1;
    border-style: solid;
  }

  ${props => props.data.own && `
    background: ${props.data.highlighted
      ? `${darken(0.1, myBubblePrimary)}`
      : `${myBubblePrimary}`
    }
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
    background: ${props.data.highlighted
      ? `${darken(0.1, yourBubblePrimary)}`
      : `${yourBubblePrimary}`
    }
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
      {isCountdown
        ? <Countdown data={data} />
        : data.content
      }
    </StyledMessage>
  )
}

export default Message
