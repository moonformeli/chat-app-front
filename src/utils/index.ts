import moment from 'moment';

enum DAYS_OF_WEEK {
  SUNDAY = 0,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}

enum DAYS_OF_WEEK_KOR {
  SUNDAY = '일요일',
  MONDAY = '월요일',
  TUESDAY = '화요일',
  WEDNESDAY = '수요일',
  THURSDAY = '목요일',
  FRIDAY = '금요일',
  SATURDAY = '토요일'
}

const isToday = (d: string): boolean => {
  const today = moment();
  const start = moment(today).set({ hour: 0, minute: 0, second: 0 });
  const end = moment(today).set({ hour: 23, minute: 59, second: 59 });

  const diff = moment(d);
  return diff.isSameOrAfter(start) && diff.isSameOrBefore(end);
};

export const format = (d: string): string => {
  if (isToday(d)) {
    return moment(d).format('HH:mm');
  }
  const day = moment(d).day();
  return DAYS_OF_WEEK_KOR[DAYS_OF_WEEK[day]];
};
