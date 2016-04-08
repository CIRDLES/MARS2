import {setGeopass, setSamples} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USER':
      return setGeopass(state, action.user);
    case 'SET_SAMPLES':
      return setSamples(state, action.samples);
  }
  return state;
}
