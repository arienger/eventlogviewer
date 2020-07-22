<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Datatyper</h2>
          <button class="button refresh-button" @click="loadDataTypes()">
            <i class="fas fa-sync"></i>
          </button>
          <table class="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Navn</th>
                <th>Sist eksportert/importert</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="datatype in datatypes" :key="datatype.id">
                <td>{{ datatype.eventEntityId }}</td>
                <td>{{ datatype.eventPayload.name }}</td>
                <td>{{ datatype.eventPayload.lastRunTimePoint }}</td>
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
  name: 'datatypes',
  data() {
    return {
      eventToDelete: null,
      message: '',
      showModal: false,
    };
  },
  async created() {
    await this.loadDataTypes();
  },
  methods: {
    ...mapActions(['getDataTypesAction']),
    closeModal() {
      this.showModal = false;
    },
    async loadDataTypes() {
      this.message = 'Vent, henter datatyper...';
      await this.getDataTypesAction();
      this.message = '';
    },
  },
  computed: {
    ...mapState(['datatypes']),
    modalMessage() {
      return `xxx`;
    },
  },
};
</script>
