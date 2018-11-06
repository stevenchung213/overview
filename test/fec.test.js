import React from 'react';
import { mount } from 'enzyme';

describe('Basic Tests', () => {

  test('mock test', () => {
    expect(true).toBe(true);
  });

  test('Make sure Enzyme method mount is working', () => {
    const divTest = <div>hello world</div>;
    const expected = mount(divTest);
    expect(expected.text()).toBe('hello world');
  });

});
