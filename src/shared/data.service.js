import * as axios from 'axios';

import { format } from 'date-fns';
import { inputDateFormat } from './constants';

import { API } from './config';

const getEvents = async function() {
  try {
    const response = await axios.get(`${API}/events`);

    let data = parseList(response);

    const events = data.map(h => {
      h.originDate = format(h.originDate, inputDateFormat);
      h.fullName = `${h.firstName} ${h.lastName}`;
      return h;
    });
    return events;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getEvent = async function(id) {
  try {
    const response = await axios.get(`${API}/events/${id}`);
    let event = parseItem(response, 200);
    event.fullName = `${event.firstName} ${event.lastName}`;
    return event;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateEvent = async function(event) {
  try {
    const response = await axios.put(`${API}/events/${event.id}`, event);
    const updatedEvent = parseItem(response, 200);
    return updatedEvent;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const addEvent = async function(event) {
  try {
    const response = await axios.post(`${API}/events`, event);
    const addedEvent = parseItem(response, 201);
    return addedEvent;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteEvent = async function(event) {
  try {
    const response = await axios.delete(`${API}/events/${event.id}`);
    parseItem(response, 200);
    return event.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getVillains = async function() {
  try {
    const response = await axios.get(`${API}/villains`);
    let data = parseList(response);
    const villains = data.map(v => {
      v.originDate = format(v.originDate, inputDateFormat);
      v.fullName = `${v.firstName} ${v.lastName}`;
      return v;
    });
    return villains;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getVillain = async function(id) {
  try {
    const response = await axios.get(`${API}/villains/${id}`);
    let villain = parseItem(response, 200);
    villain.fullName = `${villain.firstName} ${villain.lastName}`;
    return villain;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateVillain = async function(villain) {
  try {
    const response = await axios.put(`${API}/villains/${villain.id}`, villain);
    const updatedVillain = parseItem(response, 200);
    return updatedVillain;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const addVillain = async function(villain) {
  try {
    const response = await axios.post(`${API}/villains`, villain);
    const addedVillain = parseItem(response, 201);
    return addedVillain;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteVillain = async function(villain) {
  try {
    const response = await axios.delete(`${API}/villains/${villain.id}`);
    parseItem(response, 200);
    return villain.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};

export const dataService = {
  getEvents,
  getEvent,
  updateEvent,
  addEvent,
  deleteEvent,
  getVillains,
  getVillain,
  updateVillain,
  addVillain,
  deleteVillain,
};
