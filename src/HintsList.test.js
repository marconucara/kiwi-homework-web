import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import HintsList from './HintsList';

Enzyme.configure({ adapter: new Adapter() });

describe('component', () => {
  describe('HintsList', () => {
    it('should render self and subcomponents', () => {
      const onEndClick = sinon.spy();

      const component = shallow(
        <HintsList 
          hints={['aa', 'bb']}
          activeHintIndex={0}
          onEndClick={onEndClick}
        />
      );

      const buttonHintOne = component.childAt(0);
      const buttonHintTwo = component.childAt(1);

      expect(buttonHintOne.html()).toContain('aa');
      buttonHintOne.simulate('click');
      expect(onEndClick.calledOnce).toBe(true);
      expect(onEndClick.firstCall.args[0]).toBe(0);

      expect(buttonHintTwo.html()).toContain('bb');
      buttonHintTwo.simulate('click');
      expect(onEndClick.calledTwice).toBe(true);
      expect(onEndClick.secondCall.args[0]).toBe(1);
    });
  });

  it('should render self and subcomponents empty', () => {
    const onEndClick = sinon.spy();

    const component = shallow(
      <HintsList 
        hints={[]}
        activeHintIndex={0}
        onEndClick={onEndClick}
      />
    );
    
    expect(component.exists()).toBe(true);
  });
});

