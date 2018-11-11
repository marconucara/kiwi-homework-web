import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import Phone from './container';

const mockStore = configureStore();

Enzyme.configure({ adapter: new Adapter() });

describe('component', () => {
  describe('Phone', () => {
    it('should render self and subcomponents with initial state', () => {
      const store = mockStore({
        phone: {
          isFetching: false,
          hints: [],
          activeHintIndex: 0,
          number: '',
          text: '',
        },
      });
    
      const wrapper = shallow(
        <Phone store={store}/>
      );

      const state = store.getState();

      expect(wrapper.props().isFetching).toBe(state.phone.isFetching);
      expect(wrapper.props().hints).toBe(state.phone.hints);
      expect(wrapper.props().activeHintIndex).toBe(state.phone.activeHintIndex);
      expect(wrapper.props().number).toBe(state.phone.number);
      expect(wrapper.props().text).toBe(state.phone.text);
    });

    it('should render self and subcomponents with some state', () => {
      const store = mockStore({
        phone: {
          isFetching: false,
          hints: ['aa', 'bb'],
          activeHintIndex: 1,
          number: '22',
          text: 'Some previuos words ',
        },
      });
    
      const wrapper = shallow(
        <Phone store={store} />
      );

      const state = store.getState();

      expect(wrapper.props().isFetching).toBe(state.phone.isFetching);
      expect(wrapper.props().hints).toBe(state.phone.hints);
      expect(wrapper.props().activeHintIndex).toBe(state.phone.activeHintIndex);
      expect(wrapper.props().number).toBe(state.phone.number);
      expect(wrapper.props().text).toBe(state.phone.text);
    });
  });
});
