export const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export const FilterType = {
  EVERYTHING: 'everything',
  FUTURE:'future',
  PRESENT:'present',
  PAST:'past',
};

export const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer',
};

export const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

export const EditType = {
  EDITING: 'EDITING',
  CREATING: 'CREATING',
};

export const pointDefault = {
  //'id': crypto.randomUUID(),//be6fc6dd-a271-4890-bd55-ee0e6230b689
  'type': 'flight',
  'dateFrom': null,
  'dateTo': null,
  'destination': '463e9ec8-b77b-40d2-b6d2-e59642ea69b7',
  'basePrice': 0,
  'isFavorite': false,
  'offers': [],
};
/*
export const pointDefault = {
  'id': crypto.randomUUID(),
  'type': 'flight',
  'dateFrom': null,
  'dateTo': null,
  'destination': null,
  'basePrice': 0,
  'isFavorite': false,
  'offers': [],
};
*/
