<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Hendelser</h2>
          <button class="button refresh-button" @click="loadEvents()">
            <i class="fas fa-sync"></i>
          </button>
          <table class="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Tidspunkt</th>
                <th>Alvorlighetsgrad</th>
                <th>Årsak (kort)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="eventlogging in eventloggings" :key="eventlogging.id">
                <td>{{ eventlogging.eventEntityId }}</td>
                <td>{{ eventlogging.eventPayload.loggedTimeStamp}}</td>
                <td>{{ eventlogging.eventPayload.severity }}</td>
                <td>{{ eventlogging.shortmessage }}</td>
                <td>
                  <router-link
                    tag="button"
                    title="Se detaljer"
                    class="button"
                    :to="{
                      name: 'event-detail',
                      params: { id: eventlogging.eventEntityId },
                    }"
                  >
                    <span class="icon">
                      <i class="fas fa-search-plus"></i>
                    </span>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="notification is-info" v-show="message">{{ message }}</div>
      </div>
    </div>
    <Modal
      :message="modalMessage"
      :isOpen="showModal"
      @handleNo="closeModal"
      @handleYes="deleteEventLogging"
    >
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Modal from '@/components/modal';

export default {
  name: 'Eventloggings',
  data() {
    return {
      eventToDelete: null,
      message: '',
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  async created() {
    await this.loadEvents();
  },
  methods: {
    ...mapActions(['getEventLoggingsAction', 'deleteEventLoggingAction']),
    askToDelete(event) {
      this.eventToDelete = event;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async deleteEventLogging() {
      this.closeModal();
      if (this.eventToDelete) {
        await this.deleteEventLoggingAction(this.eventToDelete);
      }
      await this.loadEvents();
    },
    async loadEvents() {
      this.message = 'Vent, henter hendelser...';
      await this.getEventLoggingsAction();
      this.message = '';
    },
  },
  computed: {
    ...mapState(['eventloggings']),
    modalMessage() {
      const name =
        this.eventToDelete && this.eventToDelete.fullName
          ? this.eventToDelete.fullName
          : '';
      return `Vil du slette ${name} ?`;
    },
  },
};
</script>
