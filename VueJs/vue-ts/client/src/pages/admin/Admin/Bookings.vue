<template>
  <div class="bookings">
    <app-wrapper>
      <div class="bookings-content">
        <div class="bookings__headline">
          <h2 class="bookings__title">Bookings</h2>
          <base-button btnType="secondary" @click="deleteAllBookings">
            Clear all
          </base-button>
        </div>
        <div class="bookings__table-wrapper">
          <BookingsTable />
        </div>
      </div>
    </app-wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

// Components
import BookingsTable from '@/components/pages/Admin/Bookings/BookingsTable.vue';

export default defineComponent({
  name: 'Bookings',
  components: {
    BookingsTable,
  },
  methods: {
    ...mapActions({deleteAllBookings: 'bookings/deleteAllBookings'}),
  },
});
</script>

<style scoped>
.bookings__headline {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bookings__title {
  color: var(--secondary);
}
.bookings__table-wrapper {
  margin-top: 16px;
}
</style>