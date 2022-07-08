<template>
  <div class="admin">
    <app-wrapper>
      <div class="admin-content">
        <div class="admin__nav">
          <div>
            <router-link class="admin__nav-link admin__nav-link--back" to="/">&leftarrow; Back to plays</router-link>
          </div>
          <hr>
          <div>
            <router-link class="admin__nav-link admin__nav-link--underline admin__nav-link-theatres" to="/admin/theatres">Theatres</router-link>
            <router-link class="admin__nav-link admin__nav-link--underline" to="/admin/bookings">Bookings</router-link>
          </div>
        </div>
        <router-view v-slot="slotProps">
          <transition name="global" mode="out-in">
            <Component :is="slotProps.Component" />
          </transition>
        </router-view>
      </div>
    </app-wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Admin',
});
</script>

<style scoped>
.admin-content {
  padding: 16px 0;
}
.admin__nav {
  margin-bottom: 16px;
}
.admin__nav-link {
  font-size: 24px;
  color: var(--secondary);
  text-decoration: none;
}
.admin__nav-link--back {
  transition: color .3s ease-in-out;
  margin-bottom: 6px;
  display: inline-block;
}
.admin__nav-link--back:hover {
  color: var(--primary);
}
.admin__nav-link-theatres {
  margin-right: 16px;
}
.admin__nav-link--underline {
  position: relative;
}
.admin__nav-link--underline::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--secondary);
  transition: width .3s ease-in-out;
}
.admin__nav-link--underline:hover::after {
  width: 100%;
}
</style>