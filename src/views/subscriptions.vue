<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Abonnementer</h2>
          <button class="button refresh-button" @click="loadSubscriptions()">
            <i class="fas fa-sync"></i>
          </button>
          <table class="table">
            <thead>
              <tr>
                <th>Datatype</th>
                <th>Klient</th>
                <th>Aktiv eksport</th>
                <th>Aktiv import</th>
                <th>Sist hentet fra Nexstep</th>
                <th>Sist sendt til Nexstep</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="subscription in subscriptions" :key="subscription.id">
                <td>{{ subscription.eventPayload.dataType.type }}</td>
                <td>{{ subscription.eventPayload.client.name }}</td>
                <td style="text-align: center">
                  <input
                    type="checkbox"
                    id="exportEnabled"
                    v-model="subscription.eventPayload.exportEnabled"
                    disabled
                  />
                </td>
                <td style="text-align: center">
                  <input
                    type="checkbox"
                    id="importEnabled"
                    v-model="subscription.eventPayload.importEnabled"
                    disabled
                  />
                </td>
                <td>{{ subscription.eventPayload.lastExport }}</td>
                <td>{{ subscription.eventPayload.lastImport }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="notification is-info" v-show="message">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'subscriptions',
  data() {
    return {
      eventToDelete: null,
      message: '',
      showModal: false,
    };
  },
  async created() {
    await this.loadSubscriptions();
  },
  methods: {
    ...mapActions(['getSubscriptionsAction']),
    closeModal() {
      this.showModal = false;
    },
    async loadSubscriptions() {
      this.message = 'Vent, henter abonnementer...';
      await this.getSubscriptionsAction();
      this.message = '';
    },
  },
  computed: {
    ...mapState(['subscriptions']),
    modalMessage() {
      return `xxx`;
    },
  },
};
</script>
