const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DESTINATIONS_ITEMS_LENGTH = 3;

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE:'future',
  PRESENT:'present',
  PAST:'past',
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const EditType = {
  EDITING: 'EDITING',
  CREATING: 'CREATING',
};

const pointDefault = {
  'type': 'flight',
  'dateFrom': null,
  'dateTo': null,
  'destination': null,
  'basePrice': 0,
  'isFavorite': false,
  'offers': [],
};

export {
  TYPES,
  DESTINATIONS_ITEMS_LENGTH,
  FilterType,
  SortType,
  UserAction,
  UpdateType,
  EditType,
  pointDefault,
};
