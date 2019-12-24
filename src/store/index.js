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
  events: [],
  villains: [],
});

const mutations = {
  [ADD_EVENT](state, event) {
    state.events.unshift(event); // mutable addition
  },
  [UPDATE_EVENT](state, event) {
    const index = state.events.findIndex(h => h.id === event.id);
    state.events.splice(index, 1, event);
    state.events = [...state.events];
  },
  [GET_EVENTS](state, event) {
    state.events = event;
  },
  [DELETE_EVENT](state, eventId) {
    state.events = [...state.events.filter(p => p.id !== eventId)];
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
  async addEventAction({ commit }, event) {
    const addedEvent = await dataService.addEvent(event);
    commit(ADD_EVENT, addedEvent);
  },
  async deleteEventAction({ commit }, event) {
    const deletedEventId = await dataService.deleteEvent(event);
    commit(DELETE_EVENT, deletedEventId);
  },
  async getEventsAction({ commit }) {
    const events = await dataService.getEvents();
    commit(GET_EVENTS, events);
  },
  async updateEventAction({ commit }, event) {
    const updatedEvent = await dataService.updateEvent(event);
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
  getEventById: state => id => state.events.find(h => h.id === id),
  getVillainById: state => id => state.villains.find(v => v.id === id),
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
});
