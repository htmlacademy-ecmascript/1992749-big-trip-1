import AbstractStatefulView from '../../framework/view/abstract-stateful-view.js';
import { createFormTemplate } from './editing-form-template.js';

export default class EditingFormView extends AbstractStatefulView {
  #point = null;
  #pointDestination = null;
  #pointOffers = null;
  #arrayDestinationsModel = null;
  #rollupClickHandler = null;
  #onSubmitClick = null;

  constructor({point, pointDestination, pointOffers, arrayDestinationsModel, onRollupClick, onSubmitClick}){
    super();
    this._setState(EditingFormView.parsePointToState({point}));
    this.#pointDestination = pointDestination;
    this.#pointOffers = pointOffers;
    this.#arrayDestinationsModel = arrayDestinationsModel;
    this.#rollupClickHandler = onRollupClick;
    this.#onSubmitClick = onSubmitClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#rollupButtonClickHandler);
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#pointSubmitHandler);

    this._restoreHandlers();
  }

  get template(){
    return createFormTemplate({
      state: this._state,
      pointDestination: this.#pointDestination,
      pointOffers: this.#pointOffers,
      arrayDestinationsModel: this.#arrayDestinationsModel,
    });
  }

  reset(point) {
    this.updateElement({point});
  }

  _restoreHandlers = () => {

  };

  #rollupButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#rollupClickHandler();
  };

  #pointSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#onSubmitClick(EditingFormView.parseStateToPoint(this._state));
  };

  static parsePointToState({point}) {
    return {point};
  }

  static parseStateToPoint(state) {
    return state.point;
  }

}

