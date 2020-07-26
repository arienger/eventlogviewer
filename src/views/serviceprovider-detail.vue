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
                    <label class="input" name="name" readonly>{{
                      serviceprovider.eventPayload.name
                    }}</label>
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
                    <label class="input" name="client_type" readonly>{{
                      serviceprovider.eventPayload.clientType
                    }}</label>
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
                    <label class="input" name="client_id" readonly>{{
                      serviceprovider.eventPayload.clientId
                    }}</label>
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
                    <label class="input" name="client_secret" readonly>{{
                      serviceprovider.eventPayload.clientSecret
                    }}</label>
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
                    <label class="input" name="export_enabled" readonly>{{
                      serviceprovider.eventPayload.exportEnabled
                    }}</label>
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
                    <label class="input" name="import_enabled" readonly>{{
                      serviceprovider.eventPayload.importEnabled
                    }}</label>
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
                    <label class="input" name="audience" readonly>{{
                      serviceprovider.eventPayload.audience
                    }}</label>
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
                    <label class="input" name="grantType" readonly>{{
                      serviceprovider.eventPayload.grantType
                    }}</label>
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
                    <label class="input" name="urlForGetToken" readonly>{{
                      serviceprovider.eventPayload.urlForGetToken
                    }}</label>
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
                    <label class="input" name="urlForExport" readonly>{{
                      serviceprovider.eventPayload.urlForExport
                    }}</label>
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
                    <label class="input" name="urlForImport" readonly>{{
                      serviceprovider.eventPayload.urlForImport
                    }}</label>
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
                    <label class="input" name="bypassZipping" readonly>{{
                      serviceprovider.eventPayload.bypassZipping
                    }}</label>
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
                    <label class="input" name="applicationId" readonly>{{
                      serviceprovider.eventPayload.applicationId
                    }}</label>
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
                    <label class="input" name="nexstepCompany" readonly>{{
                      serviceprovider.eventPayload.nexstepCompany
                    }}</label>
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
                    <label class="input" name="nexstepFileGroup" readonly>{{
                      serviceprovider.eventPayload.nexstepFileGroup
                    }}</label>
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
                    <label class="input" name="domain" readonly>{{
                      serviceprovider.eventPayload.domain
                    }}</label>
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
          <span>Cancel</span>
        </button>
        <button class="link card-footer-item" @click="saveServiceprovider()">
          <i class="fas fa-save"></i>
          <span>Save</span>
        </button>
      </footer>
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
      this.serviceprovider.id
        ? await this.updateServiceproviderAction(this.serviceprovider)
        : await this.addServiceproviderAction(this.serviceprovider);
      this.$router.push({ name: 'serviceproviders' });
    },
  },
};
</script>
