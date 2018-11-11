import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import PhoneButton from './PhoneButton';

Enzyme.configure({ adapter: new Adapter() });

describe('component', () => {
  describe('PhoneButton', () => {
    it('should render self and subcomponents', () => {

      const onClick = sinon.spy();

      const component = shallow(
        <PhoneButton 
          children=""
          hint="abc"
          onClick={onClick}
        >
          2
        </PhoneButton>
      );

      const wrapper = component.children().first(0);
      const hint = wrapper.childAt(0);

      expect(wrapper.text()).toContain('abc');
      expect(hint.text()).toBe('2');
    });
  });
});
