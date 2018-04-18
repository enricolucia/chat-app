/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import ChatView from './ChatView'

const defaultProps = {
  dispatchText: jest.fn(x => x),
  messages: [],
  myId: '0',
  friendNick: 'John Doe',
  isTyping: false
}

describe('ChatView', () => {
  it('renders with a plain content', () => {
    const wrapper = shallow(<ChatView {...defaultProps} />)
    expect(wrapper.find('MessageForm').length).toBe(1)
    expect(wrapper.find('Messages').length).toBe(1)
  })
})
