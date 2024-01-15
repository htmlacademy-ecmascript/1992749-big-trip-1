import EditingFormView from '../view/form/editing-form-view';
import { render, remove, RenderPosition } from '../framework/render';
import { UserAction, UpdateType, EditType, pointDefault } from '../const';
import { isFormValid } from '../view/form/editing-form-view';

export const newEvent = document.querySelector('.trip-main__event-add-btn');

export function getNewEvent (presenter) {
  return newEvent.addEventListener('click', () => {
    presenter.createPoint();
    newEvent.setAttribute('disabled', 'disabled');
  });
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
      arrayDestinationsModel: this.#destinationsModel.get(),
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

  setSaving() {
    this.#editingFormComponent.updateElement({
      isDisabled: true,
      isSaving: true,
    });
  }

  setAborting() {
    const resetFormState = () => {
      this.#editingFormComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#editingFormComponent.shake(resetFormState);
  }

  #pointSubmitHandler = (point) => {

    if (isFormValid(point)) {
      this.#handleDataChange(
        UserAction.ADD_POINT,
        UpdateType.MINOR,
        point,
      );

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

