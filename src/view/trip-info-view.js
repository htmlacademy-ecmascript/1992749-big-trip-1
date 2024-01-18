import AbstractView from '../framework/view/abstract-view';

function createTripInfoTemplate({ isEmpty, title, duration, cost }) {
  if (isEmpty) {
    return '<div></div>';
  }

  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${title}</h1>

        <p class="trip-info__dates">${duration}</p>
      </div>

      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
      </p>
    </section>`
  );
}

export default class TripInfoView extends AbstractView {
  #isEmpty = null;
  #title = null;
  #duration = null;
  #cost = null;

  constructor({isEmpty, title = '', duration = '', cost = ''}) {
    super();

    this.#isEmpty = isEmpty;
    this.#title = title;
    this.#duration = duration;
    this.#cost = cost;
  }

  get template() {
    return createTripInfoTemplate({
      isEmpty: this.#isEmpty,
      title: this.#title,
      duration: this.#duration,
      cost: this.#cost
    });
  }
}


/*
function createTripInfoTemplate() {
  return`

  <section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">
    Amsterdam &mdash; Chamonix &mdash; Geneva
    </h1>

    <p class="trip-info__dates">
    Mar 18&nbsp;&mdash;&nbsp;20
    </p>
  </div>

  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
  </p>
</section>
  `;
}

export default class TripInfoView extends AbstractView {
  get template() {
    return createTripInfoTemplate();
  }
}
*/

/*
function createTripInfoTemplate({title, duration, cost, isEmpty}) {
  return`
  ${isEmpty
    ? '<div></div>'
    : `
  <section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">
    ${title}
    </h1>

    <p class="trip-info__dates">
    ${duration}
    </p>
  </div>

  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
  </p>`}
</section>
  `;
}
*/
