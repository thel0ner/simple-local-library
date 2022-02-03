import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { sampleImageForTest } from './sampleImageForTest.const';
import { defaultBase64 } from './notfound.const';
import BookImageThumbnail from './BookImageThumbnail';
configure({ adapter: new Adapter() });

test('must show the requested image with the desired alt text', () => {
    const component = shallow((<BookImageThumbnail altText={'altWorks'} imageBlob={sampleImageForTest} />));
    expect(component.find('Image').prop('src')).toEqual(sampleImageForTest);
});

test('must show the correct alt text', () => {
    const component = shallow((<BookImageThumbnail altText={'altWorks'} imageBlob={sampleImageForTest} />));
    expect(component.find('Image').prop('alt')).toEqual('altWorks');
});

test('must show empty alt text if no alt is specified', () => {
    const component = shallow((<BookImageThumbnail />));
    expect(component.find('Image').prop('alt')).toEqual('');
});

test('must show empty alt text if no alt is undefined', () => {
    const component = shallow((<BookImageThumbnail altText={undefined}/>));
    expect(component.find('Image').prop('alt')).toEqual('');
});

test('must show empty alt text if no alt is null', () => {
    const component = shallow((<BookImageThumbnail altText={null}/>));
    expect(component.find('Image').prop('alt')).toEqual('');
});

test('must show the default image if image data url is undefined', () => {
    const component = shallow((<BookImageThumbnail imageBlob={undefined}/>));
    expect(component.find('Image').prop('src')).toEqual(defaultBase64);
});

test('must show the default image if image data url is null', () => {
    const component = shallow((<BookImageThumbnail imageBlob={null}/>));
    expect(component.find('Image').prop('src')).toEqual(defaultBase64);
});

test('must show the default image if image data url is not specified', () => {
    const component = shallow((<BookImageThumbnail/>));
    expect(component.find('Image').prop('src')).toEqual(defaultBase64);
});