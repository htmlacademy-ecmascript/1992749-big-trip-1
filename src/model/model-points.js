import { getRandomArrayElement } from '../utils';

export default class PointsModel {
  constructor(points) {
    this.points = points;
  }

  get() {
    return this.points;
  }

  getPoint() {
    return getRandomArrayElement(this.points);
  }

}

