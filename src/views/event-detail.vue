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
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="eventEntityId">Id</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="input" name="eventEntityId" readonly>{{
                      eventlogging.eventPayload.eventEntityId
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="company">Firma</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="input" name="company" readonly>{{
                      eventlogging.eventPayload.company
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="severity">Alvorlighetsgrad</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="input" name="severity" readonly>{{
                      eventlogging.eventPayload.severity
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="message">Melding</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="input" name="message" readonly>{{
                      eventlogging.eventPayload.message
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="source">Kilde</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="input" name="source" readonly>{{
                      eventlogging.eventPayload.callerClass
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="method">Prosedyre</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="input" name="method" readonly>{{
                      eventlogging.eventPayload.callerMethod
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="timepoint">Tidspunkt</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="input" name="timepoint" readonly>{{
                      eventlogging.eventPayload.loggedTime
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="logger">Logger</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="input" name="logger" readonly>{{
                      eventlogging.eventPayload.logger
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="servername">Server/Prosess</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="input" name="servername" readonly>{{
                      eventlogging.eventPayload.serverName
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="filename">Filnavn</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="input" name="filename" readonly>{{
                      eventlogging.eventPayload.filename
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="line">Linje</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="input" name="line" readonly>{{
                      eventlogging.eventPayload.callerLine
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="timestamp">Loggetidspunkt</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="input" name="timestamp" readonly>{{
                      eventlogging.eventPayload.loggedTimeStamp
                    }}</label>
                  </div>
                </div>
              </div>
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
      eventlogging: {},
    };
  },
  created() {
    if (this.isAddMode) {
      this.eventlogging = {
        id: undefined,
      };
    } else {
      this.eventlogging = { ...this.getEventById(this.id) };
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
