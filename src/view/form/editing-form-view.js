import AbstractStatefulView from '../../framework/view/abstract-stateful-view.js';
import { createEditFormTemplate } from './editing-form-template.js';
import { EditType } from '../../const.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import dayjs from 'dayjs';
import { formatSrtingToDateTime } from '../../utils/point-utils.js';

export function isFormValid(point) {
  return point.destination !== null && point.destination !== undefined
    && point.basePrice !== 0 && point.basePrice !== undefined && point.basePrice > 0

    && point.dateFrom !== formatSrtingToDateTime(dayjs()) && point.dateFrom !== null
    && point.dateTo !== undefined && point.dateTo !== null;
}
export default class EditingFormView extends AbstractStatefulView {
  #point = null;
  #pointDestination = null;
  #offersModel = null;
  #arrayDestinationsModel = null;
  #rollupClickHandler = null;
  #resetClickHandler = null;
  #deleteClickHandler = null;
  #onSubmitClick = null;
  #datePickerFrom = null;
  #datePickerTo = null;

  #editType = null;

  constructor({point, pointDestination, offersModel, arrayDestinationsModel, onRollupClick, onDeleteClick, onResetClick, onSubmitClick, editType}){
    super();
    this._setState(EditingFormView.parsePointToState({point}));
    this.#pointDestination = pointDestination;
    this.#offersModel = offersModel;
    this.#arrayDestinationsModel = arrayDestinationsModel;
    this.#rollupClickHandler = onRollupClick;
    this.#deleteClickHandler = onDeleteClick;
    this.#resetClickHandler = onResetClick;
    this.#onSubmitClick = onSubmitClick;
    this.#editType = editType;

    this._restoreHandlers();
  }

  get template(){
    return createEditFormTemplate({
      state: this._state,
      pointDestination: this.#pointDestination,
      offersModel: this.#offersModel,
      arrayDestinationsModel: this.#arrayDestinationsModel,
      editType: this.#editType,
    });
  }

  removeElement() {
    super.removeElement();

    if (this.#datePickerFrom) {
      this.#datePickerFrom.destroy();
      this.#datePickerFrom = null;
    }

    if (this.#datePickerTo) {
      this.#datePickerTo.destroy();
      this.#datePickerTo = null;
    }
  }

  reset(point) {
    this.updateElement({point});
  }

  _restoreHandlers = () => {
    if (this.#editType === EditType.EDITING) {
      this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#rollupButtonClickHandler);
      this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formDeleteClickHandler);
    }
    if (this.#editType === EditType.CREATING) {
      this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formResetClickHandler);
    }
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#pointSubmitHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change',this.#destinationChangeHandler);
    this.element.querySelector('.event__input--price').addEventListener('change',this.#priceChangeHandler);
    this.element.querySelector('.event__type-group').addEventListener('change',this.#typeChangeHandler);
    this.element.querySelector('.event__available-offers').addEventListener('change',this.#offersChangeHandler);

    this.#setDatepicker();
  };

  #typeChangeHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({
      point: {
        ...this._state.point,
        type:evt.target.value,
        offers: [],
      }
    });
  };

  #offersChangeHandler = () => {
    const checkedBoxes = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));

    this._setState({
      point: {
        ...this._state.point,
        offers:checkedBoxes.map((element) => element.dataset.offerId)
      }
    });
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    const selectedDistination = this.#arrayDestinationsModel.find((elem) => elem.name === evt.target.value);
    const selectedDistinationId = (selectedDistination) ? selectedDistination.id : null;
    if (!selectedDistination) {
      return;
    }
    this.updateElement({
      point: {
        ...this._state.point,
        destination:selectedDistinationId,
      }
    });
  };

  #rollupButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#rollupClickHandler();
  };

  #formResetClickHandler = (evt) => {
    evt.preventDefault();
    this.#resetClickHandler();
  };

  #formDeleteClickHandler = (evt) => {
    evt.preventDefault();
    this.#deleteClickHandler(EditingFormView.parseStateToPoint(this._state));
  };

  #pointSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#onSubmitClick(EditingFormView.parseStateToPoint(this._state));
  };

  #priceChangeHandler = (evt) => {
    this._setState({
      point: {
        ...this._state.point,
        basePrice:Number(evt.target.value)
      }
    });
  };

  #dateFromChangeHandler = ([userDate]) => {
    this.updateElement({
      point: {
        ...this._state.point,
        dateFrom: userDate
      }
    });
  };

  #dateToChangeHandler = ([userDate]) => {
    this.updateElement({
      point: {
        ...this._state.point,
        dateTo: userDate
      }
    });
  };

  #setDatepicker() {
    const dateFromInput = this.element.querySelector('#event-start-time-1');
    const dateToInput = this.element.querySelector('#event-end-time-1');
    const commonConfig = {
      dateFormat: 'd/m/y H:i',
      enableTime:true,
      locale:{
        firstDayOfWeek:1,
      },
      'time_24hr':true,
    };
    this.#datePickerFrom = flatpickr(dateFromInput, {
      ...commonConfig,
      defaultDate:this._state.point.dateFrom,
      maxDate: this._state.point.dateTo,
      onChange: this.#dateFromChangeHandler,
    });

    this.#datePickerTo = flatpickr(dateToInput, {
      ...commonConfig,
      defaultDate:this._state.point.dateTo,
      minDate: this._state.point.dateFrom,
      onChange: this.#dateToChangeHandler,
    });
  }

  static parsePointToState(point) {//console.log(point.point)
    point.point = {
      ...point.point,
      isDisabled: false,
      isSaving: false,
      isDeleting: false,
    };
    return point;
  }

  static parseStateToPoint(state) {//console.log(state);debugger
    delete state.point.isDisabled;
    delete state.point.isSaving;
    delete state.point.isDeleting;
    return state.point;
  }

}

