import React from 'react';
import { shallow, render, mount } from 'enzyme';
import OpzBuddyPrivacyPolicy from './OpzBuddyPrivacyPolicy';

describe('OpzBuddyPrivacyPolicy', () => {
  let props;
  let shallowOpzBuddyPrivacyPolicy;
  let renderedOpzBuddyPrivacyPolicy;
  let mountedOpzBuddyPrivacyPolicy;

  const shallowTestComponent = () => {
    if (!shallowOpzBuddyPrivacyPolicy) {
      shallowOpzBuddyPrivacyPolicy = shallow(<OpzBuddyPrivacyPolicy {...props} />);
    }
    return shallowOpzBuddyPrivacyPolicy;
  };

  const renderTestComponent = () => {
    if (!renderedOpzBuddyPrivacyPolicy) {
      renderedOpzBuddyPrivacyPolicy = render(<OpzBuddyPrivacyPolicy {...props} />);
    }
    return renderedOpzBuddyPrivacyPolicy;
  };

  const mountTestComponent = () => {
    if (!mountedOpzBuddyPrivacyPolicy) {
      mountedOpzBuddyPrivacyPolicy = mount(<OpzBuddyPrivacyPolicy {...props} />);
    }
    return mountedOpzBuddyPrivacyPolicy;
  };  

  beforeEach(() => {
    props = {};
    shallowOpzBuddyPrivacyPolicy = undefined;
    renderedOpzBuddyPrivacyPolicy = undefined;
    mountedOpzBuddyPrivacyPolicy = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
