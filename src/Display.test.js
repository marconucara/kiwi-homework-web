import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from './Display';
import HintsList from './HintsList';

Enzyme.configure({ adapter: new Adapter() });

describe('component', () => {
  describe('Display', () => {
    it('should render self and subcomponents', () => {
      const onEndClick = () => {};

      const component = shallow(
        <Display 
          text="some text "
          hints={['aa', 'bb']}
          activeHintIndex={0}
          onEndClick={onEndClick}
        />
      );

      const hintsList = component.children().last();
      
      expect(component.children().first().html()).toContain('some&nbsp;text&nbsp;');

      expect(hintsList.type()).toBe(HintsList);
      expect(hintsList.props().hints).toEqual(['aa', 'bb']);
      expect(hintsList.props().activeHintIndex).toBe(0);
      expect(hintsList.props().onEndClick).toBe(onEndClick);
    });
  });
});
