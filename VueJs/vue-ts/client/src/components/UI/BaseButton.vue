<template>
  <button :class="`btn btn-${btnType}`">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { BtnTypes } from '../../types/PlayCardTypes.interface';

export default defineComponent({
  props: {
    btnType: {
      type: String
    }
  },
  name: 'BaseButton'
});
</script>


<style scoped>
  .btn {
    padding: 8px 16px;
    border-radius: 5px;
    outline: none;
    background-color: transparent;
    border: solid 1px var(--grey);
    font-size: 18px;
    color: var(--white);
    transition: all .3s ease-in-out;
  }
  .btn {
    cursor: pointer;
  }

  .btn.btn-primary {
    background-color: var(--primary);
    border-color: transparent;
  }
  .btn.btn-primary:hover {
    background-color: var(--primary-light);
  }
  .btn.btn-primary:active,
  .btn.btn-primary:focus {
    background-color: var(--primary-dark);
    border-color: var(--primary-darker);
    box-shadow: 0 0 5px 5px var(--primary-opacity);
  }
  
  .btn.btn-secondary {
    background-color: var(--secondary);
    border-color: transparent;
  }
  .btn.btn-secondary:hover {
    background-color: var(--secondary-light);
  }
  .btn.btn-secondary:active,
  .btn.btn-secondary:focus {
    background-color: var(--secondary-dark);
    border-color: var(--secondary-darker);
    box-shadow: 0 0 5px 5px var(--secondary-opacity);
  }
</style>