<template>
  <header class="header">
    <app-wrapper>
      <div class="header-content">
        <router-link to="/plays" class="header__title">
          <img class="header__title-logo" src="../../assets/images/logo.png" alt="logo">
          <h1 class="header__title-text">
            Theatre API
          </h1>
        </router-link>
        <h2 class="header__user-info" v-if="user">
          <router-link class="header__user-name" to="/my-bookings" title="My bookings">
            {{ user.name }}: {{ user.id }}
          </router-link>
        </h2>
        <base-button @click="handleGenerateId"  v-else btnType="secondary">Generate uid</base-button>
      </div>
    </app-wrapper>
    <transition name="global">
      <base-modal
        v-if="id"
        title="Register"
        @on-cancel="handleCancel"
        @on-submit="handleSubmit"
      >
        <form class="create-user-form" @submit.prevent="handleSubmit">
          <input class="base-input" type="text" v-model="id" readonly>
          <input class="base-input" style="margin-top: 8px;" type="text" v-model="name" placeholder="Your name...">
        </form>
      </base-modal>
    </transition>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import { nanoid } from 'nanoid';
import { useToast } from 'vue-toastification';

// Components
import BaseModal from "@/components/UI/BaseModal.vue";

const toast = useToast();

export default defineComponent({
  name: 'TheHeader',
  components: {
    BaseModal,
  },
  data() {
    return {
      id: '',
      name: '',
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    handleCancel() {
      this.id = '';
      this.name = '';
    },
    handleSubmit() {
      if (!this.name) {
        return toast.error('Please write your name :)', {
          timeout: 2000,
        });
      }

      this.$store.dispatch('setUser', {
        id: this.id,
        name: this.name,
      });
      this.id = '';
      this.name = '';

      toast.success('You have successfully been registered', {
        timeout: 2000,
      });
    },
    handleGenerateId() {
      this.id = nanoid();
    }
  },
});
</script>

<style scoped>
.header {
  background-color: var(--primary);
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.header__title {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
}
.header__title:hover .header__title-text {
  color: var(--secondary-lighter);
}
.header__title-logo {
  width: 48px;
}
.header__title-text {
  color: var(--white);
  margin-left: 14px;
  transition: color .3s ease-in-out;
}
.header__user-info {
  color: var(--white);
}
.header__user-name {
  color: var(--white);
  transition: color .3s ease-in-out;
}
.header__user-name:hover {
  color: var(--secondary-lighter);
}

.create-user-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>