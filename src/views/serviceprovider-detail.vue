<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">{{ title }}</h2>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ serviceprovider.name }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label" for="id">Id</label>
              <label class="input" name="id" readonly>{{
                serviceprovider.id
              }}</label>
            </div>
            <div class="field">
              <label class="label" for="name">Navn</label>
              <input class="input" name="name" v-model="serviceprovider.name" />
            </div>
            <div class="field">
              <label class="label" for="baseurl">Basis URL</label>
              <input
                class="input"
                name="baseurl"
                v-model="serviceprovider.baseurl"
              />
            </div>
            <div class="field">
              <label class="label" for="description">Beskrivelse</label>
              <input
                class="input"
                name="description"
                v-model="serviceprovider.description"
              />
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <button
            class="link card-footer-item cancel-button"
            @click="cancelServiceprovider()"
          >
            <i class="fas fa-undo"></i>
            <span>Cancel</span>
          </button>
          <button class="link card-footer-item" @click="saveServiceprovider()">
            <i class="fas fa-save"></i>
            <span>Save</span>
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { logger } from '@/shared/logger';

export default {
  name: 'ServiceproviderDetail',
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      serviceprovider: {},
    };
  },
  created() {
    if (this.isAddMode) {
      this.serviceprovider = {
        id: undefined,
        baseurl: '',
        name: '',
        description: '',
      };
    } else {
      // logger.info(`Looking for Serviceprovider id: ${this.id}`);
      this.serviceprovider = { ...this.getServiceproviderById(this.id) };
      logger.info(`Found Serviceprovider Id: ${this.serviceprovider.id}`);
    }
  },
  computed: {
    ...mapGetters(['getServiceproviderById']),
    isAddMode() {
      return !this.id;
    },
    title() {
      return `${this.isAddMode ? 'Legg til' : 'Rediger'} Servicetilbyder`;
    },
  },
  methods: {
    ...mapActions(['updateServiceproviderAction', 'addServiceproviderAction']),
    cancelServiceprovider() {
      this.$router.push({ name: 'serviceproviders' });
    },
    async saveServiceprovider() {
      this.serviceprovider.id
        ? await this.updateServiceproviderAction(this.serviceprovider)
        : await this.addServiceproviderAction(this.serviceprovider);
      this.$router.push({ name: 'serviceproviders' });
    },
  },
};
</script>
