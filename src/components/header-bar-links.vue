<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a :href="github" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a :href="confluence" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-leanpub fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      github: 'https://github.com/arienger/eventlogviewer',
      confluence:
        'https://doc.egcloud.no/pages/viewpage.action?pageId=18055775',
    };
  },
};
</script>
