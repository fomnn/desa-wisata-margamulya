import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.page.vue'
import defaultLayout from '@/layouts/Default.layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/mobile-navigation',
      name: 'mobileNavigation',
      component: () => import('@/views/mobile/navigation/MobileNavigationView.vue'),
    },
    {
      path: '/',
      component: defaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'profil-desa',
          name: 'profilDesa',
          component: () => import('@/views/profil_desa/ProfilDesa.page.vue'),
        },
        {
          path: 'umkm',
          name: 'umkm',
          component: () => import('@/views/umkm/Umkm.page.vue'),
        },
        {
          path: 'umkm/:id',
          name: 'detailUmkm',
          component: () => import('@/views/umkm/Detail/DetailUmkm.page.vue'),
        },
        {
          path: 'paket-wisata',
          name: 'paketWisata',
          component: () => import('@/views/paket_wisata/PaketWisata.page.vue'),
        },
        {
          path: 'hubungi-kami',
          name: 'hubungiKami',
          component: () => import('@/views/hubungi_kami/HubungiKami.page.vue'),
        },
      ],
    },
  ],
})

export default router
