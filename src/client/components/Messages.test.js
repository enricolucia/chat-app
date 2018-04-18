/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Messages from './Messages'

const defaultProps = {
  messages: [
    {
      id: '0',
      data: {
        countdown: false,
        content: 'Lorem ipsum',
        highlighted: false,
        think: false,
        own: true
      }
    },
    {
      id: '1',
      data: {
        countdown: false,
        content: 'Donor semper',
        highlighted: false,
        think: false,
        own: false
      }
    }
  ]
}

describe('Messages', () => {
  it('renders list of messages', () => {
    const tree = renderer.create(
      <Messages {...defaultProps} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
