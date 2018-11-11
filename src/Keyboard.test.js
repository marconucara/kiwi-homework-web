import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import Keyboard from './Keyboard';
import PhoneButton from './PhoneButton';

Enzyme.configure({ adapter: new Adapter() });

describe('component', () => {
  describe('Keyboard', () => {
    it('should render self and subcomponents', () => {
      const onNumberClick = sinon.spy();
      const onEndClick = sinon.spy();
      const onToggleClick = sinon.spy();
      const onDeleteClick = sinon.spy();

      const component = shallow(
        <Keyboard 
          onNumberClick={onNumberClick}
          onEndClick={onEndClick}
          onToggleClick={onToggleClick}
          onDeleteClick={onDeleteClick}
        />
      );

      const buttonTwo = component.childAt(1);
      const buttonNext = component.childAt(9);
      const buttonSpace = component.childAt(10);
      const buttonDel = component.childAt(11);

      expect(buttonTwo.type()).toBe(PhoneButton);
      buttonTwo.simulate('click');
      expect(onNumberClick.calledOnce).toBe(true);
      expect(onNumberClick.firstCall.args[0]).toBe(2);

      expect(buttonNext.type()).toBe(PhoneButton);
      buttonNext.simulate('click');
      expect(onToggleClick.calledOnce).toBe(true);

      expect(buttonSpace.type()).toBe(PhoneButton);
      buttonSpace.simulate('click');
      expect(onEndClick.calledOnce).toBe(true);

      expect(buttonDel.type()).toBe(PhoneButton);
      buttonDel.simulate('click');
      expect(onDeleteClick.calledOnce).toBe(true);
    });
  });
});
