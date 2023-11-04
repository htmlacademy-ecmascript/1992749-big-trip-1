import { getRandomArrayElement , getRandomInteger} from '../utils.js';
import { WAYPOINT_TYPES, TITLE_OFFERS } from '../const.js';

const mockOffers = [
  {
    type: getRandomArrayElement(WAYPOINT_TYPES),
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa35',
        title: getRandomArrayElement(TITLE_OFFERS),
        price: getRandomInteger(1, 100),
      }
    ]
  },
  {
    type: getRandomArrayElement(WAYPOINT_TYPES),
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa34',
        title: getRandomArrayElement(TITLE_OFFERS),
        price: getRandomInteger(1, 150),
      }
    ]
  },
  {
    type: getRandomArrayElement(WAYPOINT_TYPES),
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa33',
        title: getRandomArrayElement(TITLE_OFFERS),
        price: getRandomInteger(1, 120),
      }
    ]
  },
  {
    type: getRandomArrayElement(WAYPOINT_TYPES),
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
        title: getRandomArrayElement(TITLE_OFFERS),
        price: getRandomInteger(1, 300),
      }
    ]
  },
  {
    type: getRandomArrayElement(WAYPOINT_TYPES),
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: getRandomArrayElement(TITLE_OFFERS),
        price: getRandomInteger(1, 1000),
      }
    ]
  },
];
// : тип, название и цена — для опций;
export const generateOffers = () => mockOffers;

//console.log(generateOffers());
