import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

const DATE_FORMAT = {
  fullData: 'DD/MM/YY HH:mm',
  monthDay: 'MMM DD',
  watchMinute: 'HH:mm',
};

const formatSrtingToDateTime = (inputDate) =>
  inputDate ? dayjs(inputDate).format(DATE_FORMAT.fullData) : '';

const formatStringToShortDate = (inputDate) =>
  inputDate ? dayjs(inputDate).format(DATE_FORMAT.monthDay) : '';

const formatStringToTime = (inputDate) =>
  inputDate ? dayjs(inputDate).format(DATE_FORMAT.watchMinute) : '';

const getPointDuration = (dateFrom, dateTo) => {
  const timeDiff = dayjs(dateTo).diff(dayjs(dateFrom));
  let pointDuration = 0;
  switch (true){
    case (timeDiff >= MSEC_IN_DAY):
      pointDuration = dayjs.duration(timeDiff).format('DD[D] HH[H] mm[M]');
      break;
    case (timeDiff >= MSEC_IN_HOUR):
      pointDuration = dayjs.duration(timeDiff).format('HH[H] mm[M]');
      break;
    case (timeDiff < MSEC_IN_HOUR):
      pointDuration = dayjs.duration(timeDiff).format('mm[M]');
      break;
  }
  return pointDuration;
};

function isPointFuture(point) {
  return dayjs().isBefore(point.dateFrom);
}

function isPointPresent(point) {
  return dayjs().isAfter(point.dateFrom) && dayjs().isBefore(point.dateTo);
}

function isPointPast(point) {
  return dayjs().isAfter(point.dateTo);
}

function capitalize(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

const getPointsPriceDifference = (pointA, pointB) => {
  const pointAPrice = pointA.basePrice;
  const pointBPrice = pointB.basePrice;
  return pointBPrice - pointAPrice;
};

const getPointsTimeDifference = (pointA, pointB) => {
  const pointADuration = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const pointBDuration = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));

  return pointBDuration - pointADuration;
};

export {
  formatSrtingToDateTime,
  formatStringToShortDate,
  formatStringToTime,
  getPointDuration,
  isPointFuture,
  isPointPresent,
  isPointPast,
  capitalize,
  getPointsPriceDifference,
  getPointsTimeDifference,
};
