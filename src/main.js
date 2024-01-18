import ListPresenter from './presenter/list-presenter.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import { getNewEvent, newEvent } from './presenter/new-point-presenter.js';
import PointsApiService from './points-api-service.js';
// import TripInfoPresenter from './presenter/trip-info-presenter.js';

const AUTHORIZATION = 'Basic tr878kdldjd';
const END_POINT = 'https://20.ecmascript.pages.academy/big-trip';
const pointsApiService = new PointsApiService(END_POINT, AUTHORIZATION);
const destinationsApiService = await pointsApiService.getDestinations;
const offersApiService = await pointsApiService.getOffers;
const tripEventsContainer = document.querySelector('.trip-events');
const filterContainer = document.querySelector('.trip-controls__filters');
// const tripMainEventsContainer = document.querySelector('.trip-main');

const filterModel = new FilterModel();
const destinationsModel = new DestinationsModel(destinationsApiService);
const offersModel = new OffersModel(offersApiService);
const pointsModel = new PointsModel({pointsApiService});
// const test = await pointsApiService.getPoints;

// const tripInfoPresenter = new TripInfoPresenter({
//   tripMainEventsContainer: tripMainEventsContainer,
//   offersModel,
//   destinationsModel,
//   pointsModel,
// });

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

pointsModel.init()
  .finally(() => {
    newEvent.removeAttribute('disabled');
  });

