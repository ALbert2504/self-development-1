<template>
<table class="theatres-table">
  <thead>
    <tr class="theatres-table__row theatres-table__row--head">
      <th class="theatres-table__cell theatres-table__heading">Name</th>
      <th class="theatres-table__cell theatres-table__heading" colspan="2">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="theatre in theatres" :key="theatre._id" class="theatres-table__row">
      <td class="theatres-table__cell">
        <div class="theatres-table__info">
          <img class="theatres-table__image" :src="theatre.image" :alt="theatre.name">
          <span>{{ theatre.name }}</span>
        </div>
      </td>
      <td class="theatres-table__cell">{{ giveConvertedDate(theatre.date) }}</td>
      <td class="theatres-table__cell theatres-table__actions">
        <base-button btnType="secondary" @click="deleteTheatre(theatre._id)">Delete</base-button>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import BaseButton from "@/components/UI/BaseButton.vue";

// Helpers
import { giveConvertedDate } from '@/utils/helpers';

export default defineComponent({
  name: 'TheatresTable',
  components: {BaseButton},
  computed: {
    ...mapGetters({
      theatres: 'theatres/theatres',
    }),
  },
  methods: {
    getTheatres() {
      this.$store.dispatch('theatres/getTheatres');
    },
    deleteTheatre(id: string) {
      this.$store.dispatch('theatres/deleteTheatre', id);
    },
    giveConvertedDate,
  },
  mounted() {
    this.getTheatres();
  }
});
</script>

<style scoped>
.theatres-table,
.theatres-table__row,
.theatres-table__cell {
  border: solid 1px var(--primary);
}
.theatres-table__row {
  transition: background-color .3s ease-in-out;
}
.theatres-table__row:hover:not(.theatres-table__row--head) {
  background-color: var(--primary-opacity);
}
.theatres-table__cell {
  padding: 4px;
  text-align: left;
}
.theatres-table {
  width: 100%;
  border-collapse: collapse;
}

.theatres-table__info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.theatres-table__image {
  width: 40px;
  margin-right: 8px;
}
.theatres-table__actions {
  width: 92px;
}
</style>