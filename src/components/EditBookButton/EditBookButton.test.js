import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import EditBookComponent from './EditBookButton';

configure({ adapter: new Adapter() });
test('button should log EDIT-WORKS in console after click', () => {
    console.log = jest.fn();
    const sampleCallBack = () => console.log('EDIT-WORKS');
    const component = shallow((<EditBookComponent callback={sampleCallBack}></EditBookComponent>));
    component.find('Button').simulate('click');
    expect(console.log).toBeCalledWith('EDIT-WORKS');
});