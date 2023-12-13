import Observable from '../framework/observable';

export default class PointsModel extends Observable{
  constructor(points) {
    super();
    this.points = points;
  }

  get() {
    return this.points;
  }

}

