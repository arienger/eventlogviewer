<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Klienter</h2>
          <button class="button refresh-button" @click="loadServiceproviders()">
            <i class="fas fa-sync"></i>
          </button>
          <router-link
            tag="button"
            class="button add-button"
            :to="{
              name: 'serviceprovider-detail',
              params: { id: 0 },
            }"
          >
            <i class="fas fa-plus"></i>
          </router-link>
          <table class="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Navn</th>
                <th>Detaljer</th>
                <th>Slett</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="serviceprovider in serviceproviders"
                :key="serviceprovider.id"
              >
                <td>{{ serviceprovider.eventEntityId }}</td>
                <td>{{ serviceprovider.eventPayload.name }}</td>
                <td>
                  <router-link
                    tag="button"
                    title="Se detaljer"
                    class="button"
                    :to="{
                      name: 'serviceprovider-detail',
                      params: { id: serviceprovider.eventEntityId },
                    }"
                  >
                    <span class="icon">
                      <i class="fas fa-search-plus"></i>
                    </span>
                  </router-link>
                </td>
                <td>
                  <button
                    title="Slett denne klienten?"
                    class="link card-footer-item"
                    @click="askToDelete(serviceprovider)"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
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
      @handleYes="deleteServiceprovider"
    >
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Modal from '@/components/modal';

export default {
  name: 'Serviceproviders',
  data() {
    return {
      serviceproviderToDelete: null,
      message: '',
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  async created() {
    await this.loadServiceproviders();
  },
  methods: {
    ...mapActions(['getServiceprovidersAction', 'deleteServiceproviderAction']),
    askToDelete(serviceprovider) {
      this.serviceproviderToDelete = serviceprovider;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async deleteServiceprovider() {
      this.closeModal();
      if (this.serviceproviderToDelete) {
        await this.deleteServiceproviderAction(this.serviceproviderToDelete);
      }
      await this.loadServiceproviders();
    },
    async loadServiceproviders() {
      this.message = 'Vent, henter servicetilbydere';
      await this.getServiceprovidersAction();
      this.message = '';
    },
  },
  computed: {
    ...mapState(['serviceproviders']),
    modalMessage() {
      const name =
        this.serviceproviderToDelete && this.serviceproviderToDelete.id
          ? this.serviceproviderToDelete.name
          : '';
      return `Vil du slette ${name} ?`;
    },
  },
};
</script>
