import PointView from '../view/point/point-viewt';
import EditingFormView from '../view/form/editing-form-view';
import { render, replace } from '../framework/render';

export default class PointPresenter {
  #pointsContainer = null;
  #destinationsModel = null;
  #offersModel = null;

  #pointComponent = null;
  #editingFormComponent = null;

  #point = null;

  constructor({pointsContainer, destinationsModel, offersModel}) {
    this.#pointsContainer = pointsContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init(point) {
    this.#point = point;

    this.#pointComponent = new PointView({
      point,
      pointDestination: this.#destinationsModel.getById(point.destination),
      pointOffers: this.#offersModel.getByType(point.type),
      onEditClick: this.#pointEditClickHandler,
    });

    this.#editingFormComponent = new EditingFormView({
      point,
      pointDestination: this.#destinationsModel.getById(point.destination),
      pointOffers: this.#offersModel.getByType(point.type),
      arrayDestinationsModel: this.#destinationsModel.destinations,
      onRollupClick: this.#rollupButtonClickHandler,
      onSubmitClick: this.#pointSubmitHandler,
    });

    render(this.#pointComponent, this.#pointsContainer);
  }

  #replacePointToForm () {
    replace(this.#editingFormComponent, this.#pointComponent);
  }

  #replaceFormToPoint () {
    replace(this.#pointComponent, this.#editingFormComponent);
  }

  #escKeyDownHandler (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  }

  #pointEditClickHandler = () => {
    this.#replacePointToForm();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #rollupButtonClickHandler () {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #pointSubmitHandler () {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

}


// #renderPoint(point) {
//   const pointPresenter = new PointPresenter({
//     pointsContainer: this.#pointsContainerComponent.element,
//     destinationsModel: this.#destinationsModel,
//     offersModel: this.#offersModel,
//   });
//   pointPresenter.init(point);
// }

