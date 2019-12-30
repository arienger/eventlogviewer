<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">{{ title }}</h2>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ villain.name }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label" for="id">Id</label>
              <label class="input" name="id" readonly>{{ villain.id }}</label>
            </div>
            <div class="field">
              <label class="label" for="name">Navn</label>
              <input class="input" name="name" v-model="villain.name" />
            </div>
            <div class="field">
              <label class="label" for="baseurl">Basis URL</label>
              <input class="input" name="baseurl" v-model="villain.baseurl" />
            </div>
            <div class="field">
              <label class="label" for="description">Beskrivelse</label>
              <input
                class="input"
                name="description"
                v-model="villain.description"
              />
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <button
            class="link card-footer-item cancel-button"
            @click="cancelVillain()"
          >
            <i class="fas fa-undo"></i>
            <span>Cancel</span>
          </button>
          <button class="link card-footer-item" @click="saveVillain()">
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
  name: 'VillainDetail',
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      villain: {},
    };
  },
  created() {
    if (this.isAddMode) {
      this.villain = {
        id: undefined,
        baseurl: '',
        name: '',
        description: '',
      };
    } else {
      logger.info(`Looking for VillainId: ${this.id}`);
      this.villain = { ...this.getVillainById(this.id) };
      logger.info(`Found VillainId: ${this.villain.id}`);
    }
  },
  computed: {
    ...mapGetters(['getVillainById']),
    isAddMode() {
      return !this.id;
    },
    title() {
      return `${this.isAddMode ? 'Legg til' : 'Rediger'} Servicetilbyder`;
    },
  },
  methods: {
    ...mapActions(['updateVillainAction', 'addVillainAction']),
    cancelVillain() {
      this.$router.push({ name: 'villains' });
    },
    async saveVillain() {
      this.villain.id
        ? await this.updateVillainAction(this.villain)
        : await this.addVillainAction(this.villain);
      this.$router.push({ name: 'villains' });
    },
  },
};
</script>
