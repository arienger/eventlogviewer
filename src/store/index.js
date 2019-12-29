import Vue from 'vue';
import Vuex from 'vuex';

import { dataService } from '../shared';
import {
  ADD_EVENT,
  DELETE_EVENT,
  GET_EVENTS,
  UPDATE_EVENT,
  ADD_VILLAIN,
  DELETE_VILLAIN,
  GET_VILLAINS,
  UPDATE_VILLAIN,
} from './mutation-types';

Vue.use(Vuex);

const state = () => ({
  eventloggings: [],
  villains: [],
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
    state.eventloggings = [...state.eventloggings.filter(p => p.id !== eventId)];
  },
  [ADD_VILLAIN](state, villain) {
    state.villains.unshift(villain); // mutable addition
  },
  [UPDATE_VILLAIN](state, villain) {
    const index = state.villains.findIndex(h => h.id === villain.id);
    state.villains.splice(index, 1, villain);
    state.villains = [...state.villains];
  },
  [GET_VILLAINS](state, villains) {
    state.villains = villains;
  },
  [DELETE_VILLAIN](state, villainId) {
    state.villains = [...state.villains.filter(p => p.id !== villainId)];
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
  async addVillainAction({ commit }, villain) {
    const addedVillain = await dataService.addVillain(villain);
    commit(ADD_VILLAIN, addedVillain);
  },
  async deleteVillainAction({ commit }, villain) {
    const deletedVillainId = await dataService.deleteVillain(villain);
    commit(DELETE_VILLAIN, deletedVillainId);
  },
  async getVillainsAction({ commit }) {
    const villains = await dataService.getVillains();
    commit(GET_VILLAINS, villains);
  },
  async updateVillainAction({ commit }, villain) {
    const updatedVillain = await dataService.updateVillain(villain);
    commit(UPDATE_VILLAIN, updatedVillain);
  },
};

const getters = {
  // parameterized getters are not cached. so this is just a convenience to get the state.
  getEventById: state => id =>
    state.eventloggings.find(eventlogging => eventlogging.id === id),
  getVillainById: state => id =>
    state.villains.find(villian => villian.id === id),
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
});
