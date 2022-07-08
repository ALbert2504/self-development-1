<template>
  <div class="col">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppCol'
});
</script>

<style scoped>
.col {
  padding: 0 24px;
  width: 25%;
}

@media only screen and (max-width: 992px) {
  .col {
    width: 33.333333333%;
  }
}
@media only screen and (max-width: 768px) {
  .col {
    width: 50%;
  }
}
@media only screen and (max-width: 575px) {
  .col {
    width: 100%;
  }
}
</style>