import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import NavigationBar from '../NavigationBar/NavigationBar';

chai.use(chaiEnzyme());

describe('App component', () => {
  it('should have one Navigation bar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NavigationBar)).to.have.length(1);
  });
});
