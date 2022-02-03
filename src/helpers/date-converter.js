import moment from 'moment';

export const popularDateFormats = {
    Full: 'MMMM Do YYYY, h:mm:ss a',
    FullWithOutTime: 'MMMM Do YYYY, h:mm:ss',
    OnlyDay: 'dddd',
    Short: 'MMM Do YY',
};

export const dateConverter = (date, format) => moment(date).format(format);
