import {render} from '../render';
import FilterView, {filtersContainer} from '../view/filters.js';
import SortView, {tripEventsContainer} from '../view/sort.js';
import EditingFormView from '../view/editing-form.js';
import PointsContainerView from '../view/points-container.js';
import TripEventsItemView from '../view/view-point.js';

import { destination, offer } from '../model/model';
import { point } from '../model/model';
export default class ListPresenter {
  pointsContainerView = new PointsContainerView();

  init() {
    render(new FilterView(), filtersContainer);
    render(new SortView(), tripEventsContainer);
    render(new EditingFormView(destination, offer), tripEventsContainer);
    render(this.pointsContainerView, tripEventsContainer);
    for (let i = 0; i < 3; i++) {
      render(new TripEventsItemView(point), this.pointsContainerView.getElement());
    }
  }
}
