<template>
  <TheHeader />
  <router-view v-slot="slotProps">
    <transition name="global" mode="out-in">
      <Component :is="slotProps.Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Services
import TheHeader from './components/UI/TheHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
  },
});
</script>

<style>
@import url("./assets/css/main.css");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*::selection {
  background-color: var(--secondary-lighter);
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.global-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.global-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.global-enter-active {
  transition: all 0.3s ease-out;
}
.global-leave-active {
  transition: all 0.3s ease-in;
}

.global-enter-to,
.global-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
