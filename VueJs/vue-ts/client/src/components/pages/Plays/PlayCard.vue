<template>
  <app-col>
    <div class="card">
      <img class="card__img" :src="image" alt="">
      <div class="card__content">
        <h3 class="card__name">
          {{ name }}
        </h3>
        <div class="card__actions">
          <span class="card__date">
            {{ playDate }}
          </span>
          <base-button @click="handleSelectPlay" btnType="secondary" v-if="!isBooked">
            Book
          </base-button>
        </div>
      </div>
    </div>

    <transition name="global">
      <base-modal
        v-if="!!currentId"
        title="Book a play"
        @on-cancel="handleCancel"
        @on-submit="handleSubmit"
      >
        <input
          type="text"
          class="base-input"
          placeholder="Your name..."
          :value="myName"
          readonly
        >
        <input
          type="text"
          class="base-input"
          placeholder="Your e-mail..."
          v-model="myEmail"
        >
      </base-modal>
    </transition>
  </app-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToast } from 'vue-toastification';
import moment from 'moment';

// Components
import BaseModal from "@/components/UI/BaseModal.vue";

// Constants
import { emailRegexp } from '@/constants';

// Models
import { Booking } from '@/models';
import { Booking as BookingType } from '@/store/modules/bookings/types';

const toast = useToast();

export default defineComponent({
  name: 'PlayCard',
  components: {
    BaseModal
  },
  props: {
    name: String,
    date: [Date, String],
    image: String,
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currentId: null as null | string,
      myEmail: '',
    };
  },
  methods: {
    handleSelectPlay() {
      this.currentId = this.id;
    },
    handleCancel() {
      this.currentId = null;
    },
    handleSubmit() {
      if (!emailRegexp.test(this.myEmail)) {
        return toast.error('Please write your email correctly :)', {
          timeout: 2000,
        });
      }

      const booking = new Booking(this.id, this.currentId as string, this.myEmail, this.myName);

      this.$store.dispatch('bookings/createBooking', booking).then(() => {
        this.currentId = null;
        this.myEmail = '';
      });
    },
  },
  computed: {
    myName() {
      return this.$store.getters.user.name;
    },
    playDate() {
      return moment(this.date).format('DD-MM-YYYY HH:mm');
    },
    isBooked() {
      return this.$store.getters["bookings/myBookings"].some((myBooking: BookingType) => myBooking.theatreId === this.id);
    },
  },
});
</script>

<style scoped>
  .card {
    border-radius: 5px;
    border: solid 1px var(--primary);
  }
  .card__img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }
  .card__content {
    padding: 4px;
  }
  .card__name {
    color: var(--primary);
  }
  .card__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card__date {
    margin-top: 4px;
  }
  .base-input:not(:last-child) {
    margin-bottom: 8px;
  }
</style>