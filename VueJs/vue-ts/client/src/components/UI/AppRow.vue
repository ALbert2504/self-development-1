<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppRow'
});
</script>

<style scoped>
.row {
  margin: 0 -24px;
  display: flex;
  flex-wrap: wrap;
}
</style>