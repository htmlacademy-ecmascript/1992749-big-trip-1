import { render } from '../framework/render.js';
import SortView from '../view/sort-view.js';
import EditingFormView from '../view/form/editing-form-view.js';
import PointsContainerView from '../view/points-container-view.js';
import PointView from '../view/point/point-viewt.js';
import { replace } from '../framework/render.js';
import PointListEmptyView from '../view/point-list-empty-view.js';


export default class ListPresenter {
  #container = null;
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #sortComponent = new SortView();
  #pointListEmptyComponent = new PointListEmptyView();
  #pointsContainerComponent = new PointsContainerView();

  constructor ({container, pointsModel, destinationsModel, offersModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {

    if (this.#pointsModel.points.length) {
      this.#renderSort();
      this.#renderPointsContainer();

      for (let i = 0; i < this.#pointsModel.points.length; i++) {
        this.#renderPoint(this.#pointsModel.points[i]);
      }
    } else {
      this.#renderPointListEmpty();
    }
  }

  #renderPoint(point) {

    const pointComponent = new PointView({
      point,
      pointDestination: this.#destinationsModel.getById(point.destination),
      pointOffers: this.#offersModel.getByType(point.type),
      onEditClick: pointEditClickHandler,
    });
    const editingFormComponent = new EditingFormView({
      point,
      pointDestination: this.#destinationsModel.getById(point.destination),
      pointOffers: this.#offersModel.getByType(point.type),
      arrayDestinationsModel: this.#destinationsModel.destinations,
      onRollupClick: rollupButtonClickHandler,
      onSubmitClick: pointSubmitHandler,
    });

    function escKeyDownHandler (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    }

    function replacePointToForm () {
      replace(editingFormComponent, pointComponent);
    }
    function replaceFormToPoint () {
      replace(pointComponent, editingFormComponent);
    }

    function pointEditClickHandler () {
      replacePointToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    }
    function rollupButtonClickHandler () {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }
    function pointSubmitHandler () {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    render(pointComponent, this.#pointsContainerComponent.element);
  }

  #renderSort() {
    render(this.#sortComponent, this.#container);
  }

  #renderPointListEmpty() {
    render(this.#pointListEmptyComponent, this.#container);
  }

  #renderPointsContainer() {
    render(this.#pointsContainerComponent, this.#container);
  }

}

