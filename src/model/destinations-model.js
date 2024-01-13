
export default class DestinationsModel {
  #destinations = null;

  constructor(service) {
    this.#destinations = service;
  }

  get() {
    return this.#destinations;
  }

  getById(id) {
    return this.#destinations.
      find((destination) => destination.id === id);
  }
}

