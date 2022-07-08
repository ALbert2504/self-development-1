<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal__header">
        <h3 class="modal__title">{{ title }}</h3>
        <span class="modal__close" role="button" @click="handleCancel">&times;</span>
      </div>
      <div class="modal__body">
        <slot></slot>
      </div>
      <div class="modal__footer">
        <base-button class="modal__cancel" btnType="secondary" @click="handleCancel">
          Cancel
        </base-button>
        <base-button type="submit" class="modal__submit" btnType="primary" @click="handleSubmit">
          Create
        </base-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseModal',
  props: {
    title: String,
  },
  emits: ['on-cancel', 'on-submit'],
  methods: {
    handleSubmit() {
      this.$emit('on-submit');
    },
    handleCancel() {
      this.$emit('on-cancel');
    }
  },
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 100px;
  left: calc(50% - 200px);
  background: var(--white);
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
  border: solid 1px var(--grey);
}
.modal-content {

}
.modal__header,
.modal__body,
.modal__footer {
  padding: 8px;
}
.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px var(--grey);
}
.modal__title {
  color: var(--primary);
}
.modal__close:hover {
  cursor: pointer;
}
.modal__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: solid 1px var(--grey);
}
.modal__cancel {
  margin-right: 8px;
}
</style>