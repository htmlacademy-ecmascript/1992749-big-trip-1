import {render} from '../render.js';
import FilterView, {filtersContainer} from '../view/view-filters.js';
import SortView, {tripEventsContainer} from '../view/view-sort.js';
import EditingFormView from '../view/form/view-editing-form.js';
import PointsContainerView from '../view/view-points-container.js';
import PointView from '../view/point/view-point.js';


export default class ListPresenter {
  pointsContainerView = new PointsContainerView();

  constructor ({pointsModel, destinationsModel, offersModel}) {
    this.pointsModel = pointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
    this.arrayDestinationsModel = destinationsModel.destinations;
    this.arrayPointsModel = pointsModel.points;
  }

  init() {

    render(new FilterView(), filtersContainer);
    render(new SortView(), tripEventsContainer);
    render(new EditingFormView(
      this.pointsModel.getPoint(),
      this.destinationsModel.getById(this.pointsModel.getPoint().destination),
      this.offersModel.getByType(this.pointsModel.getPoint().type),
      this.arrayDestinationsModel),
    tripEventsContainer);

    render(this.pointsContainerView, tripEventsContainer);

    for (let i = 0; i < this.arrayPointsModel.length; i++) {

      render(new PointView(
        this.arrayPointsModel[i],
        this.destinationsModel.getById(this.arrayPointsModel[i].destination),
        this.offersModel.getByType(this.pointsModel.points[i].type),
      ),
      this.pointsContainerView.getElement());
    }
  }
}


