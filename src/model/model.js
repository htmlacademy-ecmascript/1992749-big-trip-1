import { generateOffers } from '../mock/offers.js';
import { getRandomPoints } from '../mock/points.js';
import { getMockDestinations } from '../mock/destinations.js';
import { getRandomArrayElement } from '../utils';

export const point = getRandomPoints();
export const destination = getRandomArrayElement(getMockDestinations());
export const offer = getRandomArrayElement(generateOffers());
//console.log(point);


const POINT_COUNT = 5;

export default class PointsModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoints);

  getPoints() {
    return this.points;
  }
}

const pointsModel = new PointsModel();

