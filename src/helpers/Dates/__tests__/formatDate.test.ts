import {format, formatISO, sub} from 'date-fns';

import {formatDifferenceBetweenDates} from '../formatDate';

const MOCKED_NOW = 1703864787874;

describe('formatDate', () => {
  describe('formatDifferenceBetweenDates', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should format date in seconds if date is less than 1 minute', () => {
      const seconds = 59;
      const dateNow = Date.now();
      const dateToTest = formatISO(sub(dateNow, {seconds}));

      expect(formatDifferenceBetweenDates(dateToTest)).toEqual(`${seconds} s`);
    });

    it('should format date in minutes if date is less than 1 hour', () => {
      const minutes = 59;
      const dateNow = Date.now();
      const dateToTest = formatISO(sub(dateNow, {minutes}));

      expect(formatDifferenceBetweenDates(dateToTest)).toEqual(`${minutes} m`);
    });

    it('should format date in hours if date is less than 1 day', () => {
      const hours = 23;
      const dateNow = Date.now();
      const dateToTest = formatISO(sub(dateNow, {hours}));

      expect(formatDifferenceBetweenDates(dateToTest)).toEqual(`${hours} h`);
    });

    it('should format date in days if date is less than 1 week', () => {
      const days = 6;
      const dateNow = Date.now();
      const dateToTest = formatISO(sub(dateNow, {days}));

      expect(formatDifferenceBetweenDates(dateToTest)).toEqual(`${days} d`);
    });

    it('should format date in weeks if date is less than 1 month', () => {
      const weeks = 3;
      const dateNow = Date.now();
      const dateToTest = formatISO(sub(dateNow, {weeks}));

      expect(formatDifferenceBetweenDates(dateToTest)).toEqual(`${weeks} sem`);
    });

    it('should format date in months if date is less than 1 year', () => {
      const months = 11;
      const dateNow = Date.now();
      const dateToTest = formatISO(sub(dateNow, {months}));

      expect(formatDifferenceBetweenDates(dateToTest)).toEqual(`${months} m`);
    });

    it('should format date in dd/MM/yyyy format if date is more than 1 year', () => {
      const months = 12;
      const dateNow = Date.now();
      const dateToTest = sub(dateNow, {months});
      const dateToTestISO = formatISO(dateToTest);
      const formatExpected = format(dateToTest, 'dd/MM/yyyy');

      expect(formatDifferenceBetweenDates(dateToTestISO)).toEqual(
        formatExpected,
      );
    });
  });
});
