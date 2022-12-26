// Типы объявлений
const REAL_ESTATE_TYPES = [
  'flat',
  'bungalow',
  'house',
  'palace',
  'hotel'
];

// Типы предложений
const OfferTypes = {
  FLAT: {
    NAME: 'Квартира',
    MIN_VALUE: 1000
  },
  BUNGALOW: {
    NAME: 'Бунгало',
    MIN_VALUE: 0
  },
  HOUSE: {
    NAME: 'Дом',
    MIN_VALUE: 5000
  },
  PALACE: {
    NAME: 'Дворец',
    MIN_VALUE: 10000
  },
  HOTEL: {
    NAME: 'Отель',
    MIN_VALUE: 3000
  },
};

// Время
const TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

// Доп. условия
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

// Кол-во объектов
const OBJECTS_QUANTITY = 10;

// Кол-во гостей и комнаты
const ROOMS_OPTIONS_QTY = {
  '1': [
    '1'
  ],
  '2': [
    '1',
    '2'
  ],
  '3': [
    '1',
    '2',
    '3'
  ],
  '100': [
    '0'
  ]
};

const GUESTS_OPTIONS_QTY = {
  '1': [
    '1',
    '2',
    '3'
  ],
  '2': [
    '2',
    '3'
  ],
  '3': [
    '3'
  ],
  '0': [
    '100'
  ]
};

const DEFAULT_COORDINATES = {
  lat: 35.6750,
  lng: 139.7500
};

const MAX_PRICE = 100000;

const DEFAULT_ZOOM = 12.8;

export {
  REAL_ESTATE_TYPES,
  TIMES, FEATURES,
  OBJECTS_QUANTITY,
  OfferTypes,
  ROOMS_OPTIONS_QTY,
  GUESTS_OPTIONS_QTY,
  DEFAULT_COORDINATES,
  MAX_PRICE,
  DEFAULT_ZOOM
};
