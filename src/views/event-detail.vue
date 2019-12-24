<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">Hendelse</h2>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ event.fullName }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label" for="id">id</label>
              <label class="input" name="id" readonly>{{ event.id }}</label>
            </div>
            <div class="field">
              <label class="label" for="firstName">first name</label>
              <input class="input" name="firstName" v-model="event.firstName" />
            </div>
            <div class="field">
              <label class="label" for="lastName">last name</label>
              <input class="input" name="lastName" v-model="event.lastName" />
            </div>
            <div class="field">
              <label class="label" for="description">description</label>
              <input
                class="input"
                name="description"
                v-model="event.description"
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
      event: {},
    };
  },
  created() {
    if (this.isAddMode) {
      this.event = {
        id: undefined,
        firstName: '',
        lastName: '',
        description: '',
      };
    } else {
      this.event = { ...this.getEventById(this.id) };
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
      this.$router.push({ name: 'events' });
    },
    async saveEvent() {
      this.event.id
        ? await this.updateEventAction(this.event)
        : await this.addEventAction(this.event);
      this.$router.push({ name: 'events' });
    },
  },
};
</script>
