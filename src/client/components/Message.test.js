/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Message from './Message'

const defaultProps = {
  id: '0',
  data: {
    countdown: false,
    content: 'Lorem ipsum',
    highlighted: false,
    think: false,
    own: true
  }
}

describe('Message', () => {
  it('renders with a plain content', () => {
    const tree = renderer.create(
      <Message {...defaultProps} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders with a countdown content', () => {
    const newProps = Object.assign({}, defaultProps, {countdown: true})
    const tree = renderer.create(
      <Message {...newProps} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
