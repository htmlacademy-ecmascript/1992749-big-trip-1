import ListPresenter from './presenter/list-presenter.js';
import { mockDestinations } from './mock/destinations-mock.js';
import { mockOffers } from './mock/offers-mock.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import { mockPoints } from './mock/points-mock.js';
import { getNewEvent } from './presenter/new-point-presenter.js';
import PointsApiService from './points-api-service.js';

const AUTHORIZATION = 'Basic tr878kdldjd';
const END_POINT = 'https://20.ecmascript.pages.academy/big-trip';
const tripEventsContainer = document.querySelector('.trip-events');
const filterContainer = document.querySelector('.trip-controls__filters');

const filterModel = new FilterModel();
const destinationsModel = new DestinationsModel(mockDestinations);
const offersModel = new OffersModel(mockOffers);
const pointsModel = new PointsModel(mockPoints);

const filterPresenter = new FilterPresenter({
  container: filterContainer,
  filterModel,
  pointsModel
});

filterPresenter.init();

const listPresenter = new ListPresenter({
  container: tripEventsContainer,
  destinationsModel,
  offersModel,
  pointsModel,
  filterModel
});

listPresenter.init();

getNewEvent(listPresenter);

/*
const pointsApiService = new PointsApiService(END_POINT, AUTHORIZATION);
const test = {
  'id': '4f67e4f6-9737-4e7d-9916-e7ec528295c7',
  'type': 'flight',
  'date_from': '2024-01-02T10:22:57.061Z',
  'date_to': '2024-01-03T08:53:19.828Z',
  'destination': '910ecfc8-0810-4519-8f74-6cdd2bbee1a1',
  'base_price': 300,
  'is_favorite': true,
  'offers': [
    '18f241d3-847f-4bfd-b977-a6d97e63d7fb',
    '57f24d44-e1cd-46a5-a442-cd7dea92aa23'
  ]
};
function adaptToClient(point) {
  const adaptedPoint = {...point,
    dateFrom: point['date_from'],
    dateTo: point['date_to'],
    basePrice: point['base_price'],
    isFavorite: point['is_favorite'],
  };

  // Ненужные ключи мы удаляем
  delete adaptedPoint['date_from'];
  delete adaptedPoint['date_to'];
  delete adaptedPoint['base_price'];
  delete adaptedPoint['is_favorite'];

  return adaptedPoint;
}
//console.log(adaptToClient(test))
pointsApiService.points.then((points) => {
  console.log(points.map((point) => adaptToClient(point)));
});
*/
