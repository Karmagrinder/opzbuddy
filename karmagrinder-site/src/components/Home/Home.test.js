import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  let props;
  let shallowHome;
  let renderedHome;
  let mountedHome;

  const shallowTestComponent = () => {
    if (!shallowHome) {
      shallowHome = shallow(<Home {...props} />);
    }
    return shallowHome;
  };

  const renderTestComponent = () => {
    if (!renderedHome) {
      renderedHome = render(<Home {...props} />);
    }
    return renderedHome;
  };

  const mountTestComponent = () => {
    if (!mountedHome) {
      mountedHome = mount(<Home {...props} />);
    }
    return mountedHome;
  };  

  beforeEach(() => {
    props = {};
    shallowHome = undefined;
    renderedHome = undefined;
    mountedHome = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
