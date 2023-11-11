import { createElement } from '../render.js';
import { createFormTemplite } from '../template/editing-form-template.js';

export default class EditingFormView{
  constructor(point, pointDestination, pointOffers){
    this.point = point;
    this.pointDestination = pointDestination;
    this.pointOffers = pointOffers;
  }

  getTemplate(){
    return createFormTemplite(
      this.point,
      this.pointDestination,
      this.pointOffers,
    );

  }

  getElement(){
    if(!this.element){
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
