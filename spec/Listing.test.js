import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Listing from '../client/src/components/Listing.jsx';

function setup() {
  const wrapper = shallow(<Listing />);
  return {wrapper};
}

describe('Listing Test', () => {
  it('shallow renders without crashing', () => {
    const component = shallow(<Listing />, { disableLifecycleMethods: true })
    expect(toJson(component)).toMatchSnapshot();
  });
});