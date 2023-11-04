import {getRandomArrayElement} from '../utils.js';
import {WAYPOINT_TYPES} from '../const.js';

const mockPoints = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2803c',
    basePrice: 900,
    dateFrom: 'Thu Nov 02 2023 15:20:05 GMT+0300 (Москва, стандартное время',
    dateTo: 'Thu Nov 02 2023 15:20:05 GMT+0300 (Москва, стандартное время',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: ['ID нужно взять из оффера'],
    type: 'taxi',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2804c',
    basePrice: 800,
    dateFrom: 'Thu Nov 02 2023 15:20:05 GMT+0300 (Москва, стандартное время',
    dateTo: 'Thu Nov 02 2023 15:20:05 GMT+0300 (Москва, стандартное время',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: ['ID нужно взять из оффера'],
    type: getRandomArrayElement(WAYPOINT_TYPES),
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2805c',
    basePrice: 100,
    dateFrom: 'Thu Nov 02 2023 15:20:05 GMT+0300 (Москва, стандартное время',
    dateTo: 'Thu Nov 02 2023 15:20:05 GMT+0300 (Москва, стандартное время',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: ['ID нужно взять из оффера'],
    type: getRandomArrayElement(WAYPOINT_TYPES),
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2806c',
    basePrice: 200,
    dateFrom: 'Thu Nov 02 2023 15:20:05 GMT+0300 (Москва, стандартное время',
    dateTo: 'Thu Nov 02 2023 15:20:05 GMT+0300 (Москва, стандартное время',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: ['ID нужно взять из оффера'],
    type: getRandomArrayElement(WAYPOINT_TYPES),
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2807c',
    basePrice: 300,
    dateFrom: 'Thu Nov 02 2023 15:20:05 GMT+0300 (Москва, стандартное время',
    dateTo: 'Thu Nov 02 2023 15:20:05 GMT+0300 (Москва, стандартное время',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: ['ID нужно взять из оффера'],
    type: getRandomArrayElement(WAYPOINT_TYPES),
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: 500,
    dateFrom: 'Thu Nov 02 2023 15:20:05 GMT+0300 (Москва, стандартное время',
    dateTo: 'Thu Nov 02 2023 15:20:05 GMT+0300 (Москва, стандартное время',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: ['ID нужно взять из оффера'],
    type: getRandomArrayElement(WAYPOINT_TYPES),
  },
];

//export const getMockPoints = () => mockPoints;

export const getRandomPoints = () => getRandomArrayElement(mockPoints);

//console.log(getRandomPoints());
