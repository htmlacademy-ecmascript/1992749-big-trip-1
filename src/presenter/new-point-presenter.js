import EditingFormView from '../view/form/editing-form-view';
import { render, remove } from '../framework/render';
import { UserAction,UpdateType, EditType } from '../const';

export default class NewPointPresenter {
  #pointsContainer = null;
  #destinationsModel = null;
  #offersModel = null;
  #handleDataChange = null;
  #handleDestroy = null;

  #editingFormComponent = null;

  constructor({pointsContainer, destinationsModel, offersModel, onDataChange, onDestroy}) {
    this.#pointsContainer = pointsContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
  }

  init() {

    if (this.#editingFormComponent !== null) {
      return;
    }

    this.#editingFormComponent = new EditingFormView({

      pointDestination: this.#destinationsModel,//get()
      offersModel: this.#offersModel,//get()
      type: EditType.CREATING,
      onResetClick: this.#resetClickHandler,
      onSubmitClick: this.#pointSubmitHandler,
    });

    render(this.#editingFormComponent, this.#pointsContainer);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy = (isCanceled = true) => {
    if (this.#editingFormComponent === null) {
      return;
    }

    this.#handleDestroy(isCanceled);

    remove(this.#editingFormComponent);
    this.#editingFormComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #pointSubmitHandler = (point) => {
    this.#handleDataChange(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      point,
    );
    this.destroy(false);
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.destroy();
      //document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #resetClickHandler = () => {
    this.destroy();
  };

}

