import * as axios from 'axios';

import { API } from './config';

const getEventLoggings = async function() {
  try {
    const response = await axios.get(
      `${API}/logging/list/ALL/2020-06-07_17:05:45/0/50`,
      {
        headers: {
          'eg-apps-token':
            'eyJhbGciOiJSU0EiLCJ0eXAiOiJKV1QifQ==.eyJzdWIiOiJhc3BfZzB4QG1lc3RlcmdyLWFkYmcweDAwMDAiLCJyZWZyZXNoVG9rZW4iOiJEYTdFR25RdE00YmJ0M2J0YUNORWl3PT0iLCJleHAiOjE5MDEwOTk0MjMwOTcsImFwaUtleSI6dHJ1ZSwicm9sZXMiOlsiQURNSU4iXSwibWV0YURhdGEiOnt9fQ==.hkIIVl+QITQwZyfW+n7QoaIj+5Q4mjoUQ9CUqdTy/bcMsN5teP4JihgVO9VtNH1QOxwIiCPlsoyRuTIKOGAch1qZtnji9gHlZBiXZy5GlrYPfrsPbxOCtHwGXjPq67wS3/le77oqE5mJ5iqXT2AN9ARm08xJLDhqK9lKGA/aD4UiExQeFURjmGh8xIgNI32y32I2N0jNVv8e7nNJ18ZGnsOxQd/cGzFcj05FgfAAGscOxfTT3ry5xt9hI91gYyIr7GKvIG1eZ+D576I9Q87mrsRnhYHDfb+RTdBWZwO8X/JadVJY8XLdnxqmZlB8iFG8stAJhDqBTZ33wm4piZ42hA==',
          'Access-Control-Allow-Origin': '*',
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      }
    );

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
    const response = await axios.get(`${API}/client/list`, {
      headers: {
        'eg-apps-token':
          'eyJhbGciOiJSU0EiLCJ0eXAiOiJKV1QifQ==.eyJzdWIiOiJhc3BfZzB4QG1lc3RlcmdyLWFkYmcweDAwMDAiLCJyZWZyZXNoVG9rZW4iOiJEYTdFR25RdE00YmJ0M2J0YUNORWl3PT0iLCJleHAiOjE5MDEwOTk0MjMwOTcsImFwaUtleSI6dHJ1ZSwicm9sZXMiOlsiQURNSU4iXSwibWV0YURhdGEiOnt9fQ==.hkIIVl+QITQwZyfW+n7QoaIj+5Q4mjoUQ9CUqdTy/bcMsN5teP4JihgVO9VtNH1QOxwIiCPlsoyRuTIKOGAch1qZtnji9gHlZBiXZy5GlrYPfrsPbxOCtHwGXjPq67wS3/le77oqE5mJ5iqXT2AN9ARm08xJLDhqK9lKGA/aD4UiExQeFURjmGh8xIgNI32y32I2N0jNVv8e7nNJ18ZGnsOxQd/cGzFcj05FgfAAGscOxfTT3ry5xt9hI91gYyIr7GKvIG1eZ+D576I9Q87mrsRnhYHDfb+RTdBWZwO8X/JadVJY8XLdnxqmZlB8iFG8stAJhDqBTZ33wm4piZ42hA==',
        'Access-Control-Allow-Origin': '*',
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    });

    let data = parseList(response);

    const serviceproviders = data.map(e => {
      return e;
    });
    return serviceproviders;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getDataTypes = async function() {
  try {
    const response = await axios.get(`${API}/datatype/list`, {
      headers: {
        'eg-apps-token':
          'eyJhbGciOiJSU0EiLCJ0eXAiOiJKV1QifQ==.eyJzdWIiOiJhc3BfZzB4QG1lc3RlcmdyLWFkYmcweDAwMDAiLCJyZWZyZXNoVG9rZW4iOiJEYTdFR25RdE00YmJ0M2J0YUNORWl3PT0iLCJleHAiOjE5MDEwOTk0MjMwOTcsImFwaUtleSI6dHJ1ZSwicm9sZXMiOlsiQURNSU4iXSwibWV0YURhdGEiOnt9fQ==.hkIIVl+QITQwZyfW+n7QoaIj+5Q4mjoUQ9CUqdTy/bcMsN5teP4JihgVO9VtNH1QOxwIiCPlsoyRuTIKOGAch1qZtnji9gHlZBiXZy5GlrYPfrsPbxOCtHwGXjPq67wS3/le77oqE5mJ5iqXT2AN9ARm08xJLDhqK9lKGA/aD4UiExQeFURjmGh8xIgNI32y32I2N0jNVv8e7nNJ18ZGnsOxQd/cGzFcj05FgfAAGscOxfTT3ry5xt9hI91gYyIr7GKvIG1eZ+D576I9Q87mrsRnhYHDfb+RTdBWZwO8X/JadVJY8XLdnxqmZlB8iFG8stAJhDqBTZ33wm4piZ42hA==',
        'Access-Control-Allow-Origin': '*',
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    });

    let data = parseList(response);

    const datatypes = data.map(e => {
      return e;
    });
    return datatypes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getSubscriptions = async function() {
  try {
    const response = await axios.get(`${API}/subscription/list`, {
      headers: {
        'eg-apps-token':
            'eyJhbGciOiJSU0EiLCJ0eXAiOiJKV1QifQ==.eyJzdWIiOiJhc3BfZzB4QG1lc3RlcmdyLWFkYmcweDAwMDAiLCJyZWZyZXNoVG9rZW4iOiJEYTdFR25RdE00YmJ0M2J0YUNORWl3PT0iLCJleHAiOjE5MDEwOTk0MjMwOTcsImFwaUtleSI6dHJ1ZSwicm9sZXMiOlsiQURNSU4iXSwibWV0YURhdGEiOnt9fQ==.hkIIVl+QITQwZyfW+n7QoaIj+5Q4mjoUQ9CUqdTy/bcMsN5teP4JihgVO9VtNH1QOxwIiCPlsoyRuTIKOGAch1qZtnji9gHlZBiXZy5GlrYPfrsPbxOCtHwGXjPq67wS3/le77oqE5mJ5iqXT2AN9ARm08xJLDhqK9lKGA/aD4UiExQeFURjmGh8xIgNI32y32I2N0jNVv8e7nNJ18ZGnsOxQd/cGzFcj05FgfAAGscOxfTT3ry5xt9hI91gYyIr7GKvIG1eZ+D576I9Q87mrsRnhYHDfb+RTdBWZwO8X/JadVJY8XLdnxqmZlB8iFG8stAJhDqBTZ33wm4piZ42hA==',
        'Access-Control-Allow-Origin': '*',
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    });

    let data = parseList(response);

    const subscriptions = data.map(e => {
      return e;
    });
    return subscriptions;
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
  getDataTypes,
  getSubscriptions,
};
