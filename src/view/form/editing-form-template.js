import{formatSrtingToDateTime, capitalize } from '../../utils/point-utils.js';
import { TYPES, EditType } from '../../const.js';
import he from 'he';

function createEditButtonsTemplate(isDeleting) {
  return `<button class="event__reset-btn" type="reset">${isDeleting ? 'Deleting...' : 'Delete'}</button>
  <button class="event__rollup-btn" type="button">
     <span class="visually-hidden">Open event</span>`;
}

function createCancelButtonTemplate() {
  return '<button class="event__reset-btn" type="reset">Cancel</button>';
}

function showType(types, activeType) {
  return types.map((item) => (` <div class="event__type-item">
  <input ${activeType === item ? 'checked' : ''} id="event-type-${item}-1" class="event__type-input  visually-hidden" type="radio" 
  name="event-type" value="${item}" >
  <label class="event__type-label  event__type-label--${item}" for="event-type-${item}-1">${capitalize(item)}</label>
</div>`)).join('');
}

function showOffers(offersModel, selectedOffers, type) {
  const offersByType = offersModel.getByType(type);

  return offersByType.length === 0 ? '' : `
  <section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>
  <div class="event__available-offers">
  ${offersByType.map((item) => (`<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${item.id}"
  data-offer-id="${item.id}" type="checkbox" name="event-offer-seats" 
  ${selectedOffers.find((elem) => elem === item.id) ? 'checked' : ''}>
  <label class="event__offer-label" for="event-offer-${item.id}">
    <span class="event__offer-title">${item.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${item.price}</span>
  </label>
</div>`)).join('')
}
</div>
</section>`;
}

function showPhotos(photos){
  return `<div class="event__photos-container">
            <div class="event__photos-tape">
  ${photos.map((item) => (`<img class="event__photo" src=${item.src} alt="${item.description}">`)).join('')}
            </div>
        </div>
  `;
}

function destinationList(items) {
  return items.map((item) => `<option value="${item.name}"></option>`).join('');
}

function createEditFormTemplate({state, offersModel, arrayDestinationsModel, pointDestination, editType}){

  const {point} = state;
  let currentDestination;
  if (!point.destination) {
    currentDestination = point;
  } else {
    currentDestination = arrayDestinationsModel.find((item) => item.id === point.destination);
    if (currentDestination === undefined) {
      currentDestination = pointDestination;
    }
  }

  return `<form class="event event--edit" action="#" method="post">
 <header class="event__header">
   <div class="event__type-wrapper">
     <label class="event__type  event__type-btn"
     for="event-type-toggle-1">
       <span class="visually-hidden">Choose event type</span>
       <img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="Event type icon">
     </label>
     <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

     <div class="event__type-list">
       <fieldset class="event__type-group">
         <legend class="visually-hidden">Event type</legend>

          ${showType(TYPES, point.type)}

       </fieldset>
     </div>
   </div>

   <div class="event__field-group  event__field-group--destination">
     <label class="event__label  event__type-output" for="event-destination-1">${point.type}</label>
     <input class="event__input  event__input--destination" ${state.isDisabled ? 'disabled' : ''} id="event-destination-1" type="text" name="event-destination" 
     placeholder="Chamonix" value="${point.destination ? he.encode(arrayDestinationsModel.find((item) => item.name === currentDestination.name).name) : ''}" list="destination-list-1">
     <datalist id="destination-list-1">

       ${destinationList(arrayDestinationsModel)}
       
     </datalist>
   </div>

   <div class="event__field-group  event__field-group--time">
     <label class="visually-hidden" for="event-start-time-1">From</label>
     <input class="event__input  event__input--time" ${state.isDisabled ? 'disabled' : ''} id="event-start-time-1" type="text" name="event-start-time" 
     value="${formatSrtingToDateTime(point.dateFrom)}">
     &mdash;
     <label class="visually-hidden" for="event-end-time-1">To</label>
     <input class="event__input  event__input--time" ${state.isDisabled ? 'disabled' : ''} id="event-end-time-1" type="text" name="event-end-time" 
     value="${formatSrtingToDateTime(point.dateTo)}">
   </div>

   <div class="event__field-group  event__field-group--price">
     <label class="event__label" for="event-price-1">
       <span class="visually-hidden">Price</span>
       &euro;
     </label>
     <input class="event__input  event__input--price" ${state.isDisabled ? 'disabled' : ''} id="event-price-1" type="number" min="0" name="event-price" value="${point.basePrice}">
   </div>
   <button class="event__save-btn  btn  btn--blue" type="submit" ${state.isDisabled ? 'disabled' : ''}>${state.isSaving ? 'Saving...' : 'Save'}</button>

   <!-- Кнопки и код на замену -->
  ${editType === EditType.EDITING ? createEditButtonsTemplate(state.isDeleting) : createCancelButtonTemplate()}
   <!-- Кнопки и код на замену -->

 </header>
 
 <section class="event__details">

   ${showOffers(offersModel, point.offers, point.type)}

   ${point.destination ?
    `<section class="event__section  event__section--destination">

      ${(currentDestination.description) ? `
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">
      ${currentDestination.description}
        </p>
       ` : ''}
  
       ${(currentDestination.pictures.length > 0) ? showPhotos(currentDestination.pictures) : ''}
   
      </section>
   ` : ''}

 </section>

</form>`;
}

export { createEditFormTemplate };
