import React from 'react';
import { shallow, render, mount } from 'enzyme';
import OpzBuddy from './OpzBuddy';

describe('OpzBuddy', () => {
  let props;
  let shallowOpzBuddy;
  let renderedOpzBuddy;
  let mountedOpzBuddy;

  const shallowTestComponent = () => {
    if (!shallowOpzBuddy) {
      shallowOpzBuddy = shallow(<OpzBuddy {...props} />);
    }
    return shallowOpzBuddy;
  };

  const renderTestComponent = () => {
    if (!renderedOpzBuddy) {
      renderedOpzBuddy = render(<OpzBuddy {...props} />);
    }
    return renderedOpzBuddy;
  };

  const mountTestComponent = () => {
    if (!mountedOpzBuddy) {
      mountedOpzBuddy = mount(<OpzBuddy {...props} />);
    }
    return mountedOpzBuddy;
  };  

  beforeEach(() => {
    props = {};
    shallowOpzBuddy = undefined;
    renderedOpzBuddy = undefined;
    mountedOpzBuddy = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
