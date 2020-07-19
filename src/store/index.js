import Vue from 'vue';
import Vuex from 'vuex';

import { dataService } from '../shared';
import {
  ADD_EVENT,
  DELETE_EVENT,
  GET_EVENTS,
  UPDATE_EVENT,
  ADD_SERVICEPROVIDER,
  DELETE_SERVICEPROVIDER,
  GET_SERVICEPROVIDERS,
  UPDATE_SERVICEPROVIDER,
} from './mutation-types';

Vue.use(Vuex);

const state = () => ({
  eventloggings: [],
  serviceproviders: [],
});

const mutations = {
  [ADD_EVENT](state, eventlogging) {
    state.eventloggings.unshift(eventlogging); // mutable addition
  },
  [UPDATE_EVENT](state, eventlogging) {
    const index = state.eventloggings.findIndex(h => h.id === eventlogging.id);
    state.eventloggings.splice(index, 1, eventlogging);
    state.eventloggings = [...state.eventloggings];
  },
  [GET_EVENTS](state, eventloggings) {
    state.eventloggings = eventloggings;
  },
  [DELETE_EVENT](state, eventId) {
    state.eventloggings = [
      ...state.eventloggings.filter(p => p.id !== eventId),
    ];
  },
  [ADD_SERVICEPROVIDER](state, serviceprovider) {
    state.serviceproviders.unshift(serviceprovider); // mutable addition
  },
  [UPDATE_SERVICEPROVIDER](state, serviceprovider) {
    const index = state.serviceproviders.findIndex(
      h => h.id === serviceprovider.id
    );
    state.serviceproviders.splice(index, 1, serviceprovider);
    state.serviceproviders = [...state.serviceproviders];
  },
  [GET_SERVICEPROVIDERS](state, serviceproviders) {
    state.serviceproviders = serviceproviders;
  },
  [DELETE_SERVICEPROVIDER](state, serviceproviderId) {
    state.serviceproviders = [
      ...state.serviceproviders.filter(p => p.id !== serviceproviderId),
    ];
  },
};

const actions = {
  // actions let us get to ({ state, getters, commit, dispatch }) {
  async addEventLoggingAction({ commit }, eventlogging) {
    const addedEvent = await dataService.addEventLogging(eventlogging);
    commit(ADD_EVENT, addedEvent);
  },
  async deleteEventLoggingAction({ commit }, eventlogging) {
    const deletedEventId = await dataService.deleteEventLogging(eventlogging);
    commit(DELETE_EVENT, deletedEventId);
  },
  async getEventLoggingsAction({ commit }) {
    const events = await dataService.getEventLoggings();
    commit(GET_EVENTS, events);
  },
  async updateEventLoggingAction({ commit }, eventlogging) {
    const updatedEvent = await dataService.updateEventLogging(eventlogging);
    commit(UPDATE_EVENT, updatedEvent);
  },
  async addServiceproviderAction({ commit }, serviceprovider) {
    const addedServiceprovider = await dataService.addServiceprovider(
      serviceprovider
    );
    commit(ADD_SERVICEPROVIDER, addedServiceprovider);
  },
  async deleteServiceproviderAction({ commit }, serviceprovider) {
    const deletedServiceproviderId = await dataService.deleteServiceprovider(
      serviceprovider
    );
    commit(DELETE_SERVICEPROVIDER, deletedServiceproviderId);
  },
  async getServiceprovidersAction({ commit }) {
    const serviceproviders = await dataService.getServiceproviders();
    commit(GET_SERVICEPROVIDERS, serviceproviders);
  },
  async updateServiceproviderAction({ commit }, serviceprovider) {
    const updatedServiceprovider = await dataService.updateServiceprovider(
      serviceprovider
    );
    commit(UPDATE_SERVICEPROVIDER, updatedServiceprovider);
  },
};

const getters = {
  // parameterized getters are not cached. so this is just a convenience to get the state.
  getEventById: state => eventEntityId => {
    return state.eventloggings.find(
      item => item.eventEntityId == eventEntityId
    );
  },
  getServiceproviderById: state => id => {
    return state.serviceproviders.find(
      serviceprovider => serviceprovider.id === id
    );
  },
  getAllEvents: state => {
    return state.eventloggings;
  },
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
});

export default store;
