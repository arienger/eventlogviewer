<template>
  <div id="eventdetails" class="modal" :class="{ 'is-active': isOpen }">
    <div class="column is-8">
      <div class="modal-background"></div>
      <div class="card content-title-group">
        <header class="modal-card-head">
          <h2 class="title">Hendelse</h2>
        </header>
        <section class="modal-card-body">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Id</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input" v-model="row.eventEntityId" readonly />
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label" for="severity">Alvorlighet</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    v-model="row.eventPayload.severity"
                    readonly
                  />
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
                  <textarea
                    class="textarea"
                    v-model="row.eventPayload.message"
                    readonly
                  >
                  </textarea>
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
                  <input
                    class="input"
                    v-model="row.eventPayload.callerClass"
                    readonly
                  />
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
                  <input
                    class="input"
                    v-model="row.eventPayload.callerMethod"
                    readonly
                  />
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
                  <input
                    class="input"
                    v-model="row.eventPayload.callerLine"
                    readonly
                  />
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
                  <input
                    class="input"
                    v-model="row.eventPayload.logger"
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label" for="servername">Prosess</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    v-model="row.eventPayload.serverName"
                    readonly
                  />
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
                  <input
                    class="input"
                    v-model="row.eventPayload.filename"
                    readonly
                  />
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
                  <input
                    class="input"
                    v-model="row.eventPayload.company"
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label" for="timestamp">Tidspunkt</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    v-model="row.eventPayload.loggedTimeStamp"
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="card-footer">
          <button class="link card-footer-item cancel-button" @click="onCancel">
            <i class="fas fa-undo"></i>
            <span>Avbryt</span>
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Eventdetails',
  props: {
    row: {
      type: Object,
      default: () => '',
    },
    isOpen: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    onCancel() {
      this.$emit('handleClose');
    },
  },
};
</script>

<style lang="scss"></style>
