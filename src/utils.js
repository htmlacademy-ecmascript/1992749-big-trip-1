import dayjs from 'dayjs';

const DATE_FORMAT = 'D MMMM';

export function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

export function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


// console.log(crypto.randomUUID());
