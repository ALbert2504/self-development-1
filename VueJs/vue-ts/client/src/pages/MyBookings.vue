<template>
  <div class="my-bookings">
    <app-wrapper>
      <div class="my-bookings-content">
        <h2 class="my-bookings__title">My Bookings</h2>
        <div class="my-bookings__table-wrapper">
          <MyBookingsTable />
        </div>
      </div>
    </app-wrapper>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';

// Components
import MyBookingsTable from '@/components/pages/MyBookings/MyBookingsTable.vue';

export default defineComponent({
  name: 'MyBookings',
  components: {
    MyBookingsTable,
  },
});
</script>

<style scoped>
.my-bookings-content {
  padding: 16px 0;
}
.my-bookings__title {
  color: var(--primary);
  margin-bottom: 16px;
}
</style>