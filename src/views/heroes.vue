<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Hendelser</h2>
          <button class="button refresh-button" @click="loadHeroes()">
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
              <tr v-for="hero in heroes" :key="hero.id">
                <td>{{ hero.id }}</td>
                <td>{{ hero.firstName }} {{ hero.lastName }}</td>
                <td>
                  <router-link
                    tag="button"
                    title="Se detaljer"
                    class="button"
                    :to="{ name: 'hero-detail', params: { id: hero.id } }"
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
      @handleYes="deleteHero"
    >
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Modal from '@/components/modal';

export default {
  name: 'Heroes',
  data() {
    return {
      heroToDelete: null,
      message: '',
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  async created() {
    await this.loadHeroes();
  },
  methods: {
    ...mapActions(['getHeroesAction', 'deleteHeroAction']),
    askToDelete(hero) {
      this.heroToDelete = hero;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async deleteHero() {
      this.closeModal();
      if (this.heroToDelete) {
        await this.deleteHeroAction(this.heroToDelete);
      }
      await this.loadHeroes();
    },
    async loadHeroes() {
      this.message = 'getting the heroes, please be patient';
      await this.getHeroesAction();
      this.message = '';
    },
  },
  computed: {
    ...mapState(['heroes']),
    modalMessage() {
      const name =
        this.heroToDelete && this.heroToDelete.fullName
          ? this.heroToDelete.fullName
          : '';
      return `Would you like to delete ${name} ?`;
    },
  },
};
</script>
