import { render } from '../framework/render.js';
import SortView from '../view/sort-view.js';
import PointsContainerView from '../view/points-container-view.js';
import PointListEmptyView from '../view/point-list-empty-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils/common.js';

export default class ListPresenter {
  #container = null;
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #sortComponent = new SortView();
  #pointListEmptyComponent = new PointListEmptyView();
  #pointsContainerComponent = new PointsContainerView();

  #listPoints = [];
  #pointPresenters = new Map();

  constructor ({container, pointsModel, destinationsModel, offersModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#listPoints = [...this.#pointsModel.points];

    if (this.#listPoints.length) {
      this.#renderSort();
      this.#renderPointsContainer();

      for (let i = 0; i < this.#listPoints.length; i++) {
        this.#renderPoint(this.#listPoints[i]);
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

    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #handlePointChange = (updatedPoint) => {
    this.#listPoints = updateItem(this.#listPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
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

