import EditingFormView from '../view/form/editing-form-view';
import { render, remove, RenderPosition } from '../framework/render';
import { UserAction, UpdateType, EditType, pointDefault } from '../const';
import dayjs from 'dayjs';
import { formatSrtingToDateTime } from '../utils/point-utils';

const newEvent = document.querySelector('.trip-main__event-add-btn');

export function getNewEvent (presenter) {
  return newEvent.addEventListener('click', () => {
    presenter.createPoint();
    newEvent.setAttribute('disabled', 'disabled');
  });
}

function isFormValid(point) {
  return point.destination !== null && point.destination !== undefined
    && point.basePrice !== 0 && point.basePrice !== undefined && point.basePrice > 0

    && point.dateFrom !== formatSrtingToDateTime(dayjs()) && point.dateFrom !== null
    && point.dateTo !== undefined && point.dateTo !== null;
}
export default class NewPointPresenter {
  #pointsContainer = null;
  #destinationsModel = null;
  #offersModel = null;
  #handleDataChange = null;

  #editingFormComponent = null;

  constructor({pointsContainer, destinationsModel, offersModel, onDataChange}) {
    this.#pointsContainer = pointsContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#handleDataChange = onDataChange;
  }

  init(point) {
    point = pointDefault;

    if (this.#editingFormComponent !== null) {
      return;
    }

    this.#editingFormComponent = new EditingFormView({
      point,
      pointDestination: this.#destinationsModel.getById(point.destination),
      offersModel: this.#offersModel,
      arrayDestinationsModel: this.#destinationsModel.destinations,
      editType: EditType.CREATING,
      onResetClick: this.#resetClickHandler,
      onDeleteClick: this.#deleteClickHandler,
      onSubmitClick: this.#pointSubmitHandler,
    });

    render(this.#editingFormComponent, this.#pointsContainer, RenderPosition.AFTERBEGIN);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy = () => {
    if (this.#editingFormComponent === null) {
      return;
    }

    remove(this.#editingFormComponent);
    this.#editingFormComponent = null;
    newEvent.removeAttribute('disabled');
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #pointSubmitHandler = (point) => {

    if (isFormValid(point)) {
      this.#handleDataChange(
        UserAction.ADD_POINT,
        UpdateType.MINOR,
        {id: crypto.randomUUID(), ...point},
      );
      this.destroy();
    }
  };

  #deleteClickHandler = (point) => {
    this.#handleDataChange(
      UserAction.DELETE_POINT,
      UpdateType.MINOR,
      point,
    );
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.destroy();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #resetClickHandler = () => {
    this.destroy();
  };

}

