import ListPresenter from './presenter/list-presenter.js';
import { generateDestination } from './mock/destinations-mock.js';
import { generateOffer } from './mock/offers-mock.js';
import { generatePoint } from './mock/points-mock.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';

const tripEventsContainer = document.querySelector('.trip-events');


const destinationsModel = new DestinationsModel(generateDestination());
const offersModel = new OffersModel(generateOffer());
const pointsModel = new PointsModel(generatePoint());

const listPresenter = new ListPresenter({
  container: tripEventsContainer,
  destinationsModel,
  offersModel,
  pointsModel
});


listPresenter.init();
