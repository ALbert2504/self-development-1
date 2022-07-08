<template>
  <input class="base-input" @input="handleInput" :value="content" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseInput',
  props: ['value'],
  data () {
    return {
      content: this.value
    };
  },
  methods: {
    handleInput (e: InputEvent) {
      this.$emit('input', this.content);
    }
  }
});
</script>

<style scoped>

</style>