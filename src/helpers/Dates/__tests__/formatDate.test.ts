import {formatISO, sub, add, Duration} from 'date-fns';

import {formatDifferenceBetweenDates} from '../formatDate';

const MOCKED_NOW = 1703864787874; // 29/12/2023;

function getDateISO(
  duration: Duration,
  fnToAddOrSub: (date: number, duration: Duration) => Date,
): string {
  const dateNow = Date.now();
  const dateToTest = formatISO(fnToAddOrSub(dateNow, duration));

  return formatDifferenceBetweenDates(dateToTest);
}

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
      const timeInISO = getDateISO({seconds}, sub);

      expect(timeInISO).toEqual(`${seconds} s`);
    });

    it('should format date in minutes if date is less than 1 hour', () => {
      const minutes = 59;
      const timeInISO = getDateISO({minutes}, sub);

      expect(timeInISO).toEqual(`${minutes} m`);
    });

    it('should format date in hours if date is less than 1 day', () => {
      const hours = 23;
      const timeInISO = getDateISO({hours}, sub);

      expect(timeInISO).toEqual(`${hours} h`);
    });

    it('should format date in days if date is less than 1 week', () => {
      const days = 6;
      const timeInISO = getDateISO({days}, sub);

      expect(timeInISO).toEqual(`${days} d`);
    });

    it('should format date in weeks if date is less than 1 month', () => {
      const weeks = 3;
      const timeInISO = getDateISO({weeks}, sub);

      expect(timeInISO).toEqual(`${weeks} sem`);
    });

    it('should format date in months if date is less than 1 year', () => {
      const months = 11;
      const timeInISO = getDateISO({months}, sub);

      expect(timeInISO).toEqual(`${months} m`);
    });

    it('should format date in dd/MM/yyyy format if date is more than 1 year', () => {
      const months = 12;
      const timeInISO = getDateISO({months}, sub);

      expect(timeInISO).toEqual('29/12/2022');
    });

    it('should format date in dd/MM/yyyy format if is future date', () => {
      const days = 12;
      const timeInISO = getDateISO({days}, add);

      expect(timeInISO).toEqual('10/01/2024');
    });
  });
});
