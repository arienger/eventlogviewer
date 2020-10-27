import Vue from 'vue';
import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';
import * as axios from 'axios';
Vue.use(VueToast);

let authtoken = '';
let nexstepHubBaseURL = '';
axios.get(process.env.BASE_URL + 'config.json').then(response => {
  authtoken = response.data.EG_APPS_TOKEN;
  nexstepHubBaseURL = response.data.NEXSTEPHUB_BASE_URL;
});

const getEventLoggings = async function() {
  try {
    // eslint-disable-next-line no-unused-vars
    const urlPart = '/logging/list/ALL/0/1000';
    const url = `${nexstepHubBaseURL}` + urlPart;
    const response = await axios.get(url, {
      headers: {
        'eg-apps-token': `${authtoken}`,
        'Access-Control-Allow-Origin': '*',
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    });

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
    const response = await axios.get(
      `${nexstepHubBaseURL}/eventloggings/${id}`
    );
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
      `${nexstepHubBaseURL}/eventloggings/${eventLogging.id}`,
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
    const response = await axios.post(
      `${nexstepHubBaseURL}/eventloggings`,
      eventLogging
    );
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
      `${nexstepHubBaseURL}/eventloggings/${eventLogging.id}`
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
    const response = await axios.get(`${nexstepHubBaseURL}/client/list`, {
      headers: {
        'eg-apps-token': `${authtoken}`,
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

const getServiceprovider = async function(id) {
  try {
    const response = await axios.get(`${nexstepHubBaseURL}/client/get/${id}`, {
      headers: {
        'eg-apps-token': `${authtoken}`,
        'Access-Control-Allow-Origin': '*',
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    });
    let serviceprovider = parseItem(response, 200);
    return serviceprovider;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateServiceprovider = async function(serviceprovider) {
  try {
    const response = await axios({
      method: 'put',
      url: `${nexstepHubBaseURL}/client/update`,
      headers: {
        'eg-apps-token': `${authtoken}`,
        'Access-Control-Allow-Origin': '*',
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      data: {
        id: `${serviceprovider.eventPayload.id}`,
        name: `${serviceprovider.eventPayload.name}`,
        clientType: `${serviceprovider.eventPayload.clientType}`,
        clientId: `${serviceprovider.eventPayload.clientId}`,
        clientSecret: `${serviceprovider.eventPayload.clientSecret}`,
        exportEnabled: `${serviceprovider.eventPayload.exportEnabled}`,
        importEnabled: `${serviceprovider.eventPayload.importEnabled}`,
        audience: `${serviceprovider.eventPayload.audience}`,
        grantType: `${serviceprovider.eventPayload.grantType}`,
        urlForGetToken: `${serviceprovider.eventPayload.urlForGetToken}`,
        urlForExport: `${serviceprovider.eventPayload.urlForExport}`,
        urlForImport: `${serviceprovider.eventPayload.urlForImport}`,
        bypassZipping: `${serviceprovider.eventPayload.bypassZipping}`,
        applicationId: `${serviceprovider.eventPayload.applicationId}`,
        nexstepCompany: `${serviceprovider.eventPayload.nexstepCompany}`,
        nexstepFileGroup: `${serviceprovider.eventPayload.nexstepFileGroup}`,
        domain: `${serviceprovider.eventPayload.domain}`,
      },
    });
    const updatedServiceprovider = parseItem(response, 200);
    Vue.$toast.open({
      message: 'Klient oppdatert',
      type: 'success',
      position: 'top-right',
      duration: 2000,
    });
    return updatedServiceprovider;
  } catch (error) {
    Vue.$toast.open({
      message: 'Feil ved endring av klient',
      type: 'error',
      position: 'top-right',
      duration: 5000,
    });
    console.error(error);
    return null;
  }
};

const addServiceprovider = async function(serviceprovider) {
  try {
    const response = await axios({
      method: 'post',
      url: `${nexstepHubBaseURL}/client/add`,
      headers: {
        'eg-apps-token': `${authtoken}`,
        'Access-Control-Allow-Origin': '*',
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      data: {
        id: `${serviceprovider.eventPayload.id}`,
        name: `${serviceprovider.eventPayload.name}`,
        clientType: `${serviceprovider.eventPayload.clientType}`,
        clientId: `${serviceprovider.eventPayload.clientId}`,
        clientSecret: `${serviceprovider.eventPayload.clientSecret}`,
        exportEnabled: `${serviceprovider.eventPayload.exportEnabled}`,
        importEnabled: `${serviceprovider.eventPayload.importEnabled}`,
        audience: `${serviceprovider.eventPayload.audience}`,
        grantType: `${serviceprovider.eventPayload.grantType}`,
        urlForGetToken: `${serviceprovider.eventPayload.urlForGetToken}`,
        urlForExport: `${serviceprovider.eventPayload.urlForExport}`,
        urlForImport: `${serviceprovider.eventPayload.urlForImport}`,
        bypassZipping: `${serviceprovider.eventPayload.bypassZipping}`,
        applicationId: `${serviceprovider.eventPayload.applicationId}`,
        nexstepCompany: `${serviceprovider.eventPayload.nexstepCompany}`,
        nexstepFileGroup: `${serviceprovider.eventPayload.nexstepFileGroup}`,
        domain: `${serviceprovider.eventPayload.domain}`,
      },
    });
    const addedServiceprovider = parseItem(response, 201);
    Vue.$toast.open({
      message: 'Ny klient lagret',
      type: 'success',
      position: 'top-right',
      duration: 2000,
    });
    return addedServiceprovider;
  } catch (error) {
    Vue.$toast.open({
      message: 'Feil ved lagring av klient',
      type: 'error',
      position: 'top-right',
      duration: 5000,
    });
    console.error(error);
    return null;
  }
};

const deleteServiceprovider = async function(serviceprovider) {
  try {
    const response = await axios.delete(
      `${nexstepHubBaseURL}/client/delete/${serviceprovider.eventPayload.id}`,
      {
        headers: {
          'eg-apps-token': `${authtoken}`,
          'Access-Control-Allow-Origin': '*',
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      }
    );
    parseItem(response, 200);
    return serviceprovider.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getDataTypes = async function() {
  try {
    const response = await axios.get(`${nexstepHubBaseURL}/datatype/list`, {
      headers: {
        'eg-apps-token': `${authtoken}`,
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
    const response = await axios.get(`${nexstepHubBaseURL}/subscription/list`, {
      headers: {
        'eg-apps-token': `${authtoken}`,
        'Access-Control-Allow-Origin': '*',
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    });

    let data = parseList(response);

    const subscriptions = data.map(e => {
      return e;
    });
    for (let sub of subscriptions) {
      if (sub.eventPayload.exportEnabled) {
        // console.log(sub.eventEntityId + ' has export enabled');
      }
    }
    return subscriptions;
  } catch (error) {
    console.error(error);
    return [];
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
