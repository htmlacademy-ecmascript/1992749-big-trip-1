import { getRandomInteger} from '../utils.js';

const mockDestinations = [
  {
    id: String(getRandomInteger(1, 1000)),
    description: 'Amsterdam - find yourself.',
    name: 'Amsterdam',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=6',
        description: 'This is the best thing this city has to offer.',
      }
    ]
  },
  {
    id: String(getRandomInteger(1, 1000)),
    description: 'Berlin speaks for itself',
    name: 'Berlin',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=7',
        description: 'This is definitely not what you were looking for.',
      }
    ]
  },
  {
    id: String(getRandomInteger(1, 1000)),
    description: 'Kyoto for those who know.',
    name: 'Kioto',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=33',
        description: 'The best place in this city',
      }
    ]
  },
  {
    id: String(getRandomInteger(1, 1000)),
    description: 'Prague, just Prague.',
    name: 'Prague',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=64',
        description: 'I don\'t understand what this is.',
      }
    ]
  },
  {
    id: String(getRandomInteger(1, 1000)),
    description: 'Moscow, there is so much in this word.',
    name: 'Moscow',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=67',
        description: 'Real beauty!',
      }
    ]
  },
  {
    id: String(getRandomInteger(1, 1000)),
    description: 'Oslo, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Oslo',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=67',
        description: 'Please enjoy.',
      }
    ]
  },
];
// название города и фотографии — для пункта назначения
const getMockDestinations = () => mockDestinations;

export {getMockDestinations};

//console.log(getMockDestinations());
