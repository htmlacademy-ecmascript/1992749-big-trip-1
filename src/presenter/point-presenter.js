import PointView from '../view/point/point-viewt';
import EditingFormView from '../view/form/editing-form-view';
import { render, replace, remove } from '../framework/render';

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

    const prevPointComponent = this.#pointComponent;
    const prevEditingFormComponent = this.#editingFormComponent;

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

    if (prevPointComponent === null || prevEditingFormComponent === null) {
      render(this.#pointComponent, this.#pointsContainer);
      return;
    }

    if (this.#pointsContainer.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#pointsContainer.contains(prevEditingFormComponent.element)) {
      replace(this.#editingFormComponent, prevEditingFormComponent);
    }

    remove(prevPointComponent);
    remove(prevEditingFormComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#editingFormComponent);
  }

  #replacePointToForm () {
    replace(this.#editingFormComponent, this.#pointComponent);
  }

  #replaceFormToPoint () {
    replace(this.#pointComponent, this.#editingFormComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #pointEditClickHandler = () => {
    this.#replacePointToForm();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #rollupButtonClickHandler = () => {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #pointSubmitHandler = () => {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

}

