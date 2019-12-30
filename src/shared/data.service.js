import * as axios from 'axios';

import { API } from './config';

const getEventLoggings = async function() {
  try {
    const response = await axios.get(`${API}/eventloggings`);

    let data = parseList(response);

    const eventloggings = data.map(e => {
      return e;
    });
    return eventloggings;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getEventLogging = async function(id) {
  try {
    const response = await axios.get(`${API}/eventloggings/${id}`);
    let eventLogging = parseItem(response, 200);
    return eventLogging;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateEventLogging = async function(eventLogging) {
  try {
    const response = await axios.put(
      `${API}/eventloggings/${eventLogging.id}`,
      eventLogging
    );
    const updatedEvent = parseItem(response, 200);
    return updatedEvent;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const addEventLogging = async function(eventLogging) {
  try {
    const response = await axios.post(`${API}/eventloggings`, eventLogging);
    const addedEvent = parseItem(response, 201);
    return addedEvent;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteEventLogging = async function(eventLogging) {
  try {
    const response = await axios.delete(
      `${API}/eventloggings/${eventLogging.id}`
    );
    parseItem(response, 200);
    return eventLogging.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getServiceproviders = async function() {
  try {
    const response = await axios.get(`${API}/serviceproviders`);
    let data = parseList(response);
    const serviceproviders = data.map(v => {
      return v;
    });
    return serviceproviders;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getServiceprovider = async function(id) {
  try {
    const response = await axios.get(`${API}/serviceproviders/${id}`);
    let serviceprovider = parseItem(response, 200);
    return serviceprovider;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateServiceprovider = async function(serviceprovider) {
  try {
    const response = await axios.put(
      `${API}/serviceproviders/${serviceprovider.id}`,
      serviceprovider
    );
    const updatedServiceprovider = parseItem(response, 200);
    return updatedServiceprovider;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const addServiceprovider = async function(serviceprovider) {
  try {
    const response = await axios.post(
      `${API}/serviceproviders`,
      serviceprovider
    );
    const addedServiceprovider = parseItem(response, 201);
    return addedServiceprovider;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteServiceprovider = async function(serviceprovider) {
  try {
    const response = await axios.delete(
      `${API}/serviceproviders/${serviceprovider.id}`
    );
    parseItem(response, 200);
    return serviceprovider.id;
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
  getEventLoggings,
  getEventLogging,
  updateEventLogging,
  addEventLogging,
  deleteEventLogging,
  getServiceproviders,
  getServiceprovider,
  updateServiceprovider,
  addServiceprovider,
  deleteServiceprovider,
};
