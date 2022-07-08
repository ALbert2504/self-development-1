<template>
  <table class="bookings-table">
    <thead>
    <tr class="bookings-table__row bookings-table__row--head">
      <th class="bookings-table__cell bookings-table__heading">Booker name</th>
      <th class="bookings-table__cell bookings-table__heading">Booker email</th>
      <th class="bookings-table__cell bookings-table__heading">Booked theatre</th>
      <th class="bookings-table__cell bookings-table__heading">Booking date</th>
      <th class="bookings-table__cell bookings-table__heading">Booking state</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="booking in bookings" :key="booking._id" class="bookings-table__row">
        <td class="bookings-table__cell">{{ booking.userName }}</td>
        <td class="bookings-table__cell">{{ booking.userEmail }}</td>
        <td class="bookings-table__cell">
          <div class="bookings-table__info">
            <img class="bookings-table__image" :src="booking.bookedTheatre.image" :alt="booking.bookedTheatre.name">
            <span>{{ booking.bookedTheatre.name }} ({{ giveConvertedDate(booking.bookedTheatre.date) }})</span>
          </div>
        </td>
        <td class="bookings-table__cell">{{ giveConvertedDate(booking.createdAt) }}</td>
        <td class="bookings-table__cell bookings-table__cell--actions">
          <transition name="global">
            <base-button v-if="!booking.isSubmitted" btnType="primary" @click="submitBooking(booking._id)">Submit</base-button>
            <span v-else>Submitted</span>
          </transition>

        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from "vuex";

// Components
import BaseButton from "@/components/UI/BaseButton.vue";

// Helpers
import { giveConvertedDate } from '@/utils/helpers';

export default defineComponent({
  name: 'BookingsTable',
  components: {BaseButton},
  computed: {
    ...mapGetters({
      bookings: 'bookings/bookings',
    }),
  },
  methods: {
    giveConvertedDate,
    ...mapActions({
      submitBooking: 'bookings/submitBooking',
    }),
  },
  mounted() {
    this.$store.dispatch('bookings/getBookings');
  }
});
</script>

<style scoped>
.bookings-table,
.bookings-table__row,
.bookings-table__cell {
  border: solid 1px var(--primary);
}
.bookings-table__row {
  transition: background-color .3s ease-in-out;
}
.bookings-table__row:hover:not(.bookings-table__row--head) {
  background-color: var(--primary-opacity);
}
.bookings-table__cell {
  padding: 4px;
  text-align: left;
}
.bookings-table {
  width: 100%;
  border-collapse: collapse;
}

.bookings-table__info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.bookings-table__image {
  width: 40px;
  margin-right: 8px;
}
.bookings-table__cell--actions {
  width: 120px;
  text-align: center;
}
</style>