import ListPresenter from './presenter/presenter-list.js';
import { mockDestinations } from './mock/mock-destinations.js';
import { mockOffers } from './mock/mock-offers.js';
import DestinationsModel from './model/model-destinations.js';
import OffersModel from './model/model-offers.js';
import PointsModel from './model/model-points.js';

const tripEventsContainer = document.querySelector('.trip-events');

import { mockPoints } from './mock/mock-points.js';

const destinationsModel = new DestinationsModel(mockDestinations);
const offersModel = new OffersModel(mockOffers);
const pointsModel = new PointsModel(mockPoints);

const listPresenter = new ListPresenter({
  container: tripEventsContainer,
  destinationsModel,
  offersModel,
  pointsModel
});


listPresenter.init();

