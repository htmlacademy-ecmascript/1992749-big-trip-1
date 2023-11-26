import { render } from '../framework/render.js';
import SortView from '../view/sort-view.js';
import PointsContainerView from '../view/points-container-view.js';
import PointListEmptyView from '../view/point-list-empty-view.js';
import PointPresenter from './point-presenter.js';

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
    const pointPresenter = new PointPresenter({
      pointsContainer: this.#pointsContainerComponent.element,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
    });
    pointPresenter.init(point);
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

