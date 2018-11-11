import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Phone from './component';
import Display from '../Display';
import Keyboard from '../Keyboard';

Enzyme.configure({ adapter: new Adapter() });

describe('component', () => {
  describe('Phone', () => {
    it('should render self and subcomponents', () => {
      const onNumberClick = () => {};
      const onEndClick = () => {};
      const onToggleClick = () => {};
      const onDeleteClick = () => {};

      const component = shallow(
        <Phone 
          text="some text "
          hints={['aa', 'bb']}
          activeHintIndex={0}
          onNumberClick={onNumberClick}
          onEndClick={onEndClick}
          onToggleClick={onToggleClick}
          onDeleteClick={onDeleteClick}
          errorMessage=""
        />
      );

      const display = component.children().first();
      const keyboard = component.children().last();

      expect(display.type()).toBe(Display);
      expect(display.props().text).toBe('some text ');
      expect(display.props().hints).toEqual(['aa', 'bb']);
      expect(display.props().activeHintIndex).toBe(0);
      expect(display.props().onEndClick).toBe(onEndClick);

      expect(keyboard.type()).toBe(Keyboard);
      expect(keyboard.props().onEndClick).toBe(onEndClick);
      expect(keyboard.props().onNumberClick).toBe(onNumberClick);
      expect(keyboard.props().onToggleClick).toBe(onToggleClick);
      expect(keyboard.props().onDeleteClick).toBe(onDeleteClick);

    });
  });
});
