<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">{{ title }}</h2>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ serviceprovider.eventPayload.name }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="name">Navn</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="name"
                      class="input"
                      name="name"
                      required
                      v-model="serviceprovider.eventPayload.name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="client_type">Klient type</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="client_type"
                      class="input"
                      name="client_type"
                      required
                      v-model="serviceprovider.eventPayload.clientType"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="client_id">Bruker Id</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="client_id"
                      class="input"
                      name="client_id"
                      required
                      v-model="serviceprovider.eventPayload.clientId"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="client_secret">Bruker Passord</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="client_secret"
                      class="input"
                      name="client_secret"
                      required
                      v-model="serviceprovider.eventPayload.clientSecret"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="export_enabled"
                  >Eksport aktivisert</label
                >
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      name="export_enabled"
                      type="checkbox"
                      id="export_enabled"
                      v-model="serviceprovider.eventPayload.exportEnabled"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="import_enabled"
                  >Import aktivisert</label
                >
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      name="import_enabled"
                      type="checkbox"
                      id="import_enabled"
                      v-model="serviceprovider.eventPayload.importEnabled"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="audience">Motpartadresse</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="audience"
                      class="input"
                      name="audience"
                      required
                      v-model="serviceprovider.eventPayload.audience"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="grantType">Tilgangstype</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="grantType"
                      class="input"
                      name="grantType"
                      required
                      v-model="serviceprovider.eventPayload.grantType"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="urlForGetToken"
                  >URL for sikkerhetsnøkkel</label
                >
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="urlForGetToken"
                      class="input"
                      name="urlForGetToken"
                      required
                      v-model="serviceprovider.eventPayload.urlForGetToken"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="urlForExport">URL for eksport</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="urlForExport"
                      class="input"
                      name="urlForExport"
                      required
                      v-model="serviceprovider.eventPayload.urlForExport"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="urlForImport">URL for import</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="urlForImport"
                      class="input"
                      name="urlForImport"
                      required
                      v-model="serviceprovider.eventPayload.urlForImport"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="bypassZipping"
                  >Utelat komprimering</label
                >
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      name="bypassZipping"
                      type="checkbox"
                      id="bypassZipping"
                      v-model="serviceprovider.eventPayload.bypassZipping"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="applicationId">Applikasjons Id</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="applicationId"
                      class="input"
                      name="applicationId"
                      required
                      v-model="serviceprovider.eventPayload.applicationId"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="nexstepCompany"
                  >Nexstep firmakode</label
                >
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="nexstepCompany"
                      class="input"
                      name="nexstepCompany"
                      required
                      v-model="serviceprovider.eventPayload.nexstepCompany"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="nexstepFileGroup"
                  >Nexstep filgruppe</label
                >
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="nexstepFileGroup"
                      class="input"
                      name="nexstepFileGroup"
                      required
                      v-model="serviceprovider.eventPayload.nexstepFileGroup"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="domain">Domene</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      id="domain"
                      class="input"
                      name="domain"
                      required
                      v-model="serviceprovider.eventPayload.domain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <button
          class="link card-footer-item cancel-button"
          @click="cancelServiceprovider()"
        >
          <i class="fas fa-undo"></i>
          <span>Avbryt</span>
        </button>
        <button class="link card-footer-item" @click="saveServiceprovider()">
          <i class="fas fa-save"></i>
          <span>Lagre</span>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
      this.serviceprovider.eventPayload = {
        id: null,
        name: ' ',
        clientType: ' ',
        clientId: ' ',
        clientSecret: ' ',
        exportEnabled: false,
        importEnabled: false,
        audience: ' ',
        grantType: ' ',
        urlForGetToken: ' ',
        urlForExport: ' ',
        urlForImport: ' ',
        bypassZipping: true,
        applicationId: ' ',
        nexstepCompany: ' ',
        nexstepFileGroup: ' ',
        domain: ' ',
      };
    } else {
      //logger.info(`Looking for Serviceprovider id: ${this.id}`);
      this.serviceprovider = { ...this.getServiceproviderById(this.id) };
      //logger.info(`Found Serviceprovider Id: ${this.serviceprovider.id}`);
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
      this.serviceprovider.eventPayload.id
        ? await this.updateServiceproviderAction(this.serviceprovider)
        : await this.addServiceproviderAction(this.serviceprovider);
      this.$router.push({ name: 'serviceproviders' });
    },
  },
};
</script>
