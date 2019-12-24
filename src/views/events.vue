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
                <th>Navn</th>
                <th>Detaljer</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event in events" :key="event.id">
                <td>{{ event.id }}</td>
                <td>{{ event.firstName }} {{ event.lastName }}</td>
                <td>
                  <router-link
                    tag="button"
                    title="Se detaljer"
                    class="button"
                    :to="{ name: 'event-detail', params: { id: event.id } }"
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
      @handleYes="deleteEvent"
    >
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Modal from '@/components/modal';

export default {
  name: 'Events',
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
    ...mapActions(['getEventsAction', 'deleteEventAction']),
    askToDelete(event) {
      this.eventToDelete = event;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async deleteEvent() {
      this.closeModal();
      if (this.eventToDelete) {
        await this.deleteEventAction(this.eventToDelete);
      }
      await this.loadEvents();
    },
    async loadEvents() {
      this.message = 'Vent, henter hendelser...';
      await this.getEventsAction();
      this.message = '';
    },
  },
  computed: {
    ...mapState(['events']),
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
