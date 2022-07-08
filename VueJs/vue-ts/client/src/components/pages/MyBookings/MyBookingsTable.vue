<template>
  <table class="my-bookings-table">
    <thead>
    <tr class="my-bookings-table__row my-bookings-table__row--head">
      <th class="my-bookings-table__cell my-bookings-table__heading">Booker name</th>
      <th class="my-bookings-table__cell my-bookings-table__heading">Booker email</th>
      <th class="my-bookings-table__cell my-bookings-table__heading">Booked theatre</th>
      <th class="my-bookings-table__cell my-bookings-table__heading">Booking date</th>
      <th class="my-bookings-table__cell my-bookings-table__heading">Booking state</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="booking in myBookings" :key="booking._id" class="my-bookings-table__row">
      <td class="my-bookings-table__cell">{{ booking.userName }}</td>
      <td class="my-bookings-table__cell">{{ booking.userEmail }}</td>
      <td class="my-bookings-table__cell">
        <div class="my-bookings-table__info">
          <img class="my-bookings-table__image" :src="booking.bookedTheatre.image" :alt="booking.bookedTheatre.name">
          <span>{{ booking.bookedTheatre.name }} ({{ giveConvertedDate(booking.bookedTheatre.date) }})</span>
        </div>
      </td>
      <td class="my-bookings-table__cell">{{ giveConvertedDate(booking.createdAt) }}</td>
      <td class="my-bookings-table__cell my-bookings-table__cell--actions">
        <transition name="global">
          <span v-if="!booking.isSubmitted">Pending</span>
          <span v-else>Submitted</span>
        </transition>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

// Helpers
import { giveConvertedDate } from '@/utils/helpers';

export default defineComponent({
  name: 'MyBookingsTable',
  methods: {
    giveConvertedDate,
    getMyBookings() {
      this.$store.dispatch('bookings/getMyBookings');
    },
  },
  computed: {
    ...mapGetters({
      myBookings: 'bookings/myBookings',
    }),
  },
  mounted() {
    this.getMyBookings();
  },
});
</script>

<style>
.my-bookings-table,
.my-bookings-table__row,
.my-bookings-table__cell {
  border: solid 1px var(--primary);
}
.my-bookings-table__row {
  transition: background-color .3s ease-in-out;
}
.my-bookings-table__row:hover:not(.my-bookings-table__row--head) {
  background-color: var(--primary-opacity);
}
.my-bookings-table__cell {
  padding: 4px;
  text-align: left;
}
.my-bookings-table {
  width: 100%;
  border-collapse: collapse;
}

.my-bookings-table__info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.my-bookings-table__image {
  width: 40px;
  margin-right: 8px;
}
.my-bookings-table__cell--actions {
  width: 120px;
  text-align: center;
}
</style>