import {createElement} from '../../render';
import { createPointTemplite } from './template-point';

export default class PointView {
  constructor(point, pointDestination, pointOffers) {
    this.point = point;
    this.pointDestination = pointDestination;
    this.pointOffers = pointOffers;
  }

  getTemplate() {
    return createPointTemplite(this.point, this.pointDestination, this.pointOffers);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
