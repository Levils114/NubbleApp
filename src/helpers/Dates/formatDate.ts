import {
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';

export function formatDifferenceBetweenDates(date: string) {
  const dateToGetDifference = new Date(date);
  const currentDay = new Date();

  const differenceBetweenDatesInDays = differenceInDays(
    currentDay,
    dateToGetDifference,
  );

  switch (true) {
    case differenceBetweenDatesInDays < 7:
      return `${differenceBetweenDatesInDays} d`;
    case differenceBetweenDatesInDays >= 7 && differenceBetweenDatesInDays < 30:
      return `${differenceInWeeks(currentDay, dateToGetDifference)} sem`;
    case differenceBetweenDatesInDays >= 30 &&
      differenceBetweenDatesInDays < 365:
      return `${differenceInMonths(currentDay, dateToGetDifference)} m`;
    case differenceBetweenDatesInDays >= 365:
      return `${differenceInYears(currentDay, dateToGetDifference)} y`;
  }
}
