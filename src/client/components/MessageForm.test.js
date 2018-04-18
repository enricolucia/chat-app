/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import MessageForm from './MessageForm'

const defaultProps = {
  onInteraction: jest.fn(x => x)
}

describe('MessageForm', () => {
  it('renders message from', () => {
    const tree = renderer.create(
      <MessageForm {...defaultProps} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
