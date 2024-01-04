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

const pointsApiService = new PointsApiService(END_POINT, AUTHORIZATION);
//console.log(pointsApiService.points)
pointsApiService.points.then((points) => {
  console.log(points[0]);
});
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


