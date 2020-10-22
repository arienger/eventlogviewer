<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-12">
        <div class="section content-title-group">
          <h2 class="title">Hendelser</h2>
          <button class="button refresh-button" @click="loadEvents()">
            <i class="fas fa-sync"></i>
          </button>

          <section>
            <label>Klikk på linje for detaljer</label>
            <b-table
              :data="eventloggings"
              :columns="columns"
              :sticky-header="stickyHeaders"
              :height="600"
              :scrollable="true"
              @click="clickEvent"
            >
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
    <Eventdetails
      :row="row"
      :isOpen="showEventDetails"
      @handleClose="closeEventDetails"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Modal from '@/components/modal';
import Eventdetails from '@/components/eventdetails';

export default {
  name: 'Eventloggings',
  data() {
    return {
      eventToDelete: null,
      message: '',
      row: null,
      showModal: false,
      showEventDetails: false,
      stickyHeaders: true,
      columns: [
        {
          field: 'eventEntityId',
          width: '10',
          label: 'ID',
        },
        {
          field: 'eventPayload.severity',
          width: '35',
          label: 'Alvorsgrad',
          searchable: true,
        },
        {
          field: 'eventPayload.loggedTimeStamp',
          label: 'Tidspunkt',
          width: '50',
          searchable: true,
        },

        {
          field: 'eventPayload.shortMessage',
          label: 'Melding (avkortet til 80 tegn)',
          width: '80',
          searchable: true,
        },
      ],
    };
  },
  components: {
    Modal,
    Eventdetails,
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
    closeEventDetails() {
      this.showEventDetails = false;
    },
    clickEvent(row) {
      this.showEventDetails = true;
      this.row = row;
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

<style>
.is-sticky-column-one {
  background: #23d160 !important;
  color: white !important;
}
.is-sticky-column-two {
  background: #167df0 !important;
  color: white !important;
}
</style>
