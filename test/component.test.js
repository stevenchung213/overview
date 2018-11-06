import React from 'react';
import { mount, shallow } from 'enzyme';
import Overview from '../client/components/Overview.jsx';

describe('Front End Tests', () => {

  it("should render correctly", () => {
    expect(shallow(<Overview />)).toMatchSnapshot();
  });

});
