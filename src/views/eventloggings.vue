<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-10">
        <div class="section content-title-group">
          <h2 class="title">Hendelser</h2>
          <button class="button refresh-button" @click="loadEvents()">
            <i class="fas fa-sync"></i>
          </button>
          <section>
            <b-table
              :data="eventloggings"
              :sticky-header="stickyHeaders"
              :height="600"
              :scrollable="true"
            >
              <template slot-scope="props">
                <b-table-column label="ID" width="35" numeric>
                  {{ props.row.eventEntityId }}
                </b-table-column>
                <b-table-column label="Alvorsgrad" width="35" searchable>
                  {{ props.row.eventPayload.severity }}
                </b-table-column>
                <b-table-column label="Tidspunkt" width="35">
                  {{ props.row.eventPayload.loggedTimeStamp }}
                </b-table-column>
                <b-table-column
                  label="Melding (avkortet til 80 tegn)"
                  width="500"
                >
                  {{ props.row.eventPayload.message | truncate(80) }}
                </b-table-column>
                <b-table-column>
                  <router-link
                    tag="button"
                    title="Se detaljer"
                    class="button"
                    :to="{
                      name: 'event-detail',
                      params: { id: props.row.eventEntityId },
                    }"
                  >
                    <span class="icon">
                      <i class="fas fa-search-plus"></i>
                    </span>
                  </router-link>
                </b-table-column>
              </template>
            </b-table>
          </section>
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
      stickyHeaders: true,
      searchable: true,
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
  filters: {
    /**
     * Filter to truncate string, accepts a length parameter
     */
    truncate(value, length) {
      return value.length > length ? value.substr(0, length) + '...' : value;
    },
  },
};
</script>
