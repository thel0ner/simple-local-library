import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import AddNewBookButton from './AddNewBookButton';

configure({ adapter: new Adapter() });
test('button should log WORKS in console after click', () => {
    console.log = jest.fn();
    const sampleCallBack = () => console.log('WORKS');
    const component = shallow((<AddNewBookButton callback={sampleCallBack}></AddNewBookButton>));
    component.find('Button').simulate('click');
    expect(console.log).toBeCalledWith('WORKS');
});