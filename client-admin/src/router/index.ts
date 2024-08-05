import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      // {
      //   path: '',
      //   name: 'home',
      //   component: () => import('@/views/HomeView.vue'),
      // },
      {
        path: 'umkm',
        name: 'umkm',
        component: () => import('@/views/Umkm/UmkmView.vue'),
      },
      {
        path: 'umkm/add',
        name: 'umkm-add',
        component: () => import('@/views/Umkm/Add/AddUmkmView.vue'),
      },
      {
        path: 'trip-package',
        name: 'trip-package',
        component: () => import('@/views/TripPackage/TripPackageView.vue'),
      },
      {
        path: 'trip-package/:id',
        name: 'detail-trip-package',
        component: () => import('@/views/TripPackage/Detail/DetailTripPackageView.vue'),
      },
    ],
  },
  {
    path: '/auth/login',
    name: 'login',
    meta: { unAuthenticatedOnly: true },
    component: () => import('@/views/Auth/LoginView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, _from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      name: 'login',
      // save the location we were at to come back later
      // query: { redirect: to.fullPath },
    }
  }
  if (to.meta.unAuthenticatedOnly && !!localStorage.getItem('token')) {
    // this route requires no auth, check if logged in
    // if so, redirect to home page.
    return {
      name: 'umkm',
    }
  }
})

export default router
