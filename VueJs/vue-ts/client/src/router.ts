import { createRouter, createWebHistory, NavigationGuardWithThis } from 'vue-router';
import { useToast } from 'vue-toastification';

// Components
import Plays from '@/pages/Plays.vue';
import MyBookings from '@/pages/MyBookings.vue';

import Theatres from '@/pages/admin/Admin/Theatres.vue';
import Bookings from '@/pages/admin/Admin/Bookings.vue';
import Admin from '@/pages/admin/Admin/Admin.vue';

const toast = useToast();

let _password: string;

const beforeEnterAdminRoute: NavigationGuardWithThis<any> = (to, from, next) => {
  if (_password && _password === process.env.VUE_APP_ADMIN_PASS) {
    return next();
  }

  const pass = prompt('Enter your password please', '');

  if (pass === process.env.VUE_APP_ADMIN_PASS) {
    _password = process.env.VUE_APP_ADMIN_PASS;
    next();
  } else {
    toast.error('Wrong password, do not try to hack :)', {
      timeout: 2000,
    });
    next('/');
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/plays' },
    { path: '/plays', component: Plays },
    { path: '/my-bookings', component: MyBookings },
    {
      path: '/admin',
      redirect: '/admin/theatres',
      component: Admin,
      beforeEnter: beforeEnterAdminRoute,
      children: [
        {
          path: 'theatres',
          component: Theatres,
          beforeEnter: beforeEnterAdminRoute,
        },
        {
          path: 'bookings',
          component: Bookings,
          beforeEnter: beforeEnterAdminRoute,
        },
      ]
    },
  ],
});


export default router;