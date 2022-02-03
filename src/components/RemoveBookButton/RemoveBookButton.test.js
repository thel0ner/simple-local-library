import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import RemoveBookButton from './RemoveBookButton';

configure({ adapter: new Adapter() });
test('button should log DELETE-WORKS in console after click', () => {
    console.log = jest.fn();
    const sampleCallBack = () => console.log('DELETE-WORKS');
    const component = shallow((<RemoveBookButton callback={sampleCallBack}></RemoveBookButton>));
    component.find('Button').simulate('click');
    expect(console.log).toBeCalledWith('DELETE-WORKS');
});