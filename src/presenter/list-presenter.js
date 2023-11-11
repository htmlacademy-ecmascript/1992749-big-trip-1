import {render} from '../render';
import FilterView, {filtersContainer} from '../view/filters.js';
import SortView, {tripEventsContainer} from '../view/sort.js';
import EditingFormView from '../view/editing-form.js';
import PointsContainerView from '../view/points-container.js';
import PointView from '../view/view-point.js';


export default class ListPresenter {
  pointsContainerView = new PointsContainerView();

  constructor ({pointsModel, destinationsModel, offersModel}) {
    this.pointsModel = pointsModel.points;
    this.destinationsModel = destinationsModel.getById(pointsModel.points.destination);
    this.offersModel = offersModel.getByType(pointsModel.points.type);
  }

  init() {
    render(new FilterView(), filtersContainer);
    render(new SortView(), tripEventsContainer);
    render(new EditingFormView(this.pointsModel, this.destinationsModel, this.offersModel), tripEventsContainer);
    render(this.pointsContainerView, tripEventsContainer);
    render(new PointView(this.pointsModel, this.destinationsModel, this.offersModel), this.pointsContainerView.getElement());
  }
}
