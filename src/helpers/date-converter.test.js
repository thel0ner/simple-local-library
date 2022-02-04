import { popularDateFormats, dateConverter } from './date-converter';
test('it must convert date properly in short format', () => {
    expect(dateConverter(new Date(2018, 10, 15), popularDateFormats.Short).includes('Nov 15th 18')).toBe(true);
});