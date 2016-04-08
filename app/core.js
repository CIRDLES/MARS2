/*
import csv from 'csv-parse/lib/sync';
import fs from 'fs';
import {Map, List} from 'immutable';

export const INITIAL_STATE = new Map();

export function setGeopass(state, user) {
  // TODO: check against the Geopass server
  return state.set('user', Map(user));
}

export function setSamples(state, filename) {
  // TODO: validate csv files
  // TODO: chunk csv. use asynchronous?
  var csvText = fs.readFileSync(filename, 'utf8');
  var data = csv(csvText, {columns: true, auto_parse: true});
  for(var i=0; i<data.length; i++) {
    data[i] = Map(data[i]);
  }
  return state.set('samples', List(data));
}

*/
