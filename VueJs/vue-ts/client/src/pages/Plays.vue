<template>
  <div class="plays">
    <app-wrapper>
      <div class="plays-content">
        <h2 class="plays__title">Plays</h2>
        <app-row class="plays__list">
          <PlayCard
              v-for="theatre in theatres"
              :key="theatre._id"
              :id="theatre._id"
              :date="theatre.date"
              :name="theatre.name"
              :image="theatre.image"
          />
        </app-row>
      </div>

    </app-wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

// Components
import PlayCard from '../components/pages/Plays/PlayCard.vue';

export default defineComponent({
  name: 'Plays',
  components: {
    PlayCard,
  },
  computed: {
    ...mapGetters({
      theatres: 'theatres/theatres'
    }),
  },
  methods: {
    getTheatres() {
      this.$store.dispatch('theatres/getTheatres');
    },
    getMyBookings() {
      this.$store.dispatch('bookings/getMyBookings');
    }
  },
  mounted() {
    this.getTheatres();
    this.getMyBookings();
  }
});
</script>

<style scoped>
.plays-content {
  padding: 16px 0;
}
.plays__title {
  color: var(--primary);
  margin-bottom: 16px;
}
</style>