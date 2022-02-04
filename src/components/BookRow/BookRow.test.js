import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import BookRow from './BookRow';
configure({ adapter: new Adapter() });

test('it must show book title', () => {
    const component = shallow((<BookRow bookTitle={'sample'} />));
    expect(component.text().includes('sample')).toBe(true);
});

test('it must show book date added {Nov 15th 18}', () => {
    const component = shallow((<BookRow bookDateAdded={new Date(2018,10,15)} />));
    expect(component.text().includes('Nov 15th 18')).toBe(true);
});