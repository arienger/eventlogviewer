<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Nexstep API-servere</h2>
          <button class="button refresh-button" @click="loadVillains()">
            <i class="fas fa-sync"></i>
          </button>
          <router-link
            tag="button"
            class="button add-button"
            :to="{ name: 'villain-detail', params: { id: 0 } }"
          >
            <i class="fas fa-plus"></i>
          </router-link>
          <table class="table">
            <thead>
              <tr>
                <th>NexstepAPI server Id</th>
                <th>NexstepAPI navn</th>
                <th>Detaljer</th>
                <th>Slett</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="villain in villains" :key="villain.id">
                <td>{{ villain.id }}</td>
                <td>{{ villain.name }}</td>
                <td>
                  <router-link
                    tag="button"
                    title="Se detaljer"
                    class="button"
                    :to="{ name: 'villain-detail', params: { id: villain.id } }"
                  >
                    <span class="icon">
                      <i class="fas fa-search-plus"></i>
                    </span>
                  </router-link>
                </td>
                <td>
                  <button
                    title="Slett denne referansen til NexstepAPI server?"
                    class="link card-footer-item"
                    @click="askToDelete(villain)"
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
      :title="Bekreft"
      @handleNo="closeModal"
      @handleYes="deleteVillain"
    >
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Modal from '@/components/modal';

export default {
  name: 'Villains',
  data() {
    return {
      villainToDelete: null,
      message: '',
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  async created() {
    await this.loadVillains();
  },
  methods: {
    ...mapActions(['getVillainsAction', 'deleteVillainAction']),
    askToDelete(villain) {
      this.villainToDelete = villain;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async deleteVillain() {
      this.closeModal();
      if (this.villainToDelete) {
        await this.deleteVillainAction(this.villainToDelete);
      }
      await this.loadVillains();
    },
    async loadVillains() {
      this.message = 'Vent, henter Nexstep-API serverdefinisjoner';
      await this.getVillainsAction();
      this.message = '';
    },
  },
  computed: {
    ...mapState(['villains']),
    modalMessage() {
      const name =
        this.villainToDelete && this.villainToDelete.id
          ? this.villainToDelete.name
          : '';
      return `Vil du slette ${name} ?`;
    },
  },
};
</script>
