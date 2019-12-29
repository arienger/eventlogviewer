<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">Hendelse</h2>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ eventlogging.shortmessage }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label" for="id">id</label>
              <label class="input" name="id" readonly>{{ eventlogging.id }}</label>
            </div>
            <div class="field">
              <label class="label" for="errormessage">Årsak (lang)</label>
              <input
                class="input"
                name="errormessage"
                v-model="eventlogging.longmessage"
              />
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <button
            class="link card-footer-item cancel-button"
            @click="cancelEvent()"
          >
            <i class="fas fa-undo"></i>
            <span>Tilbake</span>
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
  name: 'EventDetail',
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      eventlogging: {},
    };
  },
  created() {
    if (this.isAddMode) {
      this.eventlogging = {
        id: undefined,
      };
    } else {
      logger.info(`Looking for EventId: ${this.id}`);
      this.eventlogging = { ...this.getEventById(this.id) };
      logger.info(`Found EventId: ${this.eventlogging.id}`);
    }
  },
  computed: {
    ...mapGetters(['getEventById']),
    isAddMode() {
      return !this.id;
    },
    title() {
      return `${this.isAddMode ? 'Add' : 'Edit'} Hendelse`;
    },
  },
  methods: {
    ...mapActions(['updateEventAction', 'addEventAction']),
    cancelEvent() {
      this.$router.push({ name: 'eventloggings' });
    },
    async saveEvent() {
      this.eventlogging.id
        ? await this.updateEventAction(this.eventlogging)
        : await this.addEventAction(this.eventlogging);
      this.$router.push({ name: 'eventloggings' });
    },
  },
};
</script>
