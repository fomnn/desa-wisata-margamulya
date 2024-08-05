<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HeroComp from '@/components/Hero.comp.vue'
import heroUmkmBgImage from '@/assets/img/heroUmkm.png'
import { axiosInstance, baseURL } from '@/axios/instance'

// Data ================================

const umkmList = ref<{ id: number, title: string, description: string }[]>([])

// Methods =============================

async function fetchAllUmkm() {
  try {
    const { data } = await axiosInstance.get('/umkm')
    umkmList.value = data
  } catch (error) {
    console.error(error)
  }
}

// Lifecycle ===========================

onMounted(async () => {
  await fetchAllUmkm()
})
</script>

<template>
  <main>
    <!-- Bagian Hero -->
    <HeroComp :heroBgImage="heroUmkmBgImage" title="Buah Tangan Khas Desa Wisata Margamulya" />

    <!-- Bagian Umkm Desa -->
    <div class="ct-container !pt-0">
      <section class="">
        <div class="">
          <h2 class="text-2xl font-semibold text-center sm:text-4xl font-abhaya text-darkGreen">
            UMKM Desa Wisata Margamulya
          </h2>
          <p class="mt-4 text-sm font-thin text-pretty text-start sm:text-center sm:text-base">
            Desa kami menawarkan beragam produk yang dapat menjadi oleh-oleh sempurna bagi wisatawan yang berkunjung. Mulai dari pernak-pernik buatan lokal hingga makanan ringan lezat, selalu ada sesuatu yang sesuai dengan setiap selera dan preferensi. Bawa pulang sebagian dari kekayaan budaya desa kami dengan suvenir buatan tangan indah yang menampilkan keahlian tradisional pengrajin lokal kami. Jadi, pastikan untuk menjelajahi pasar dan toko lokal kami untuk menemukan kenang-kenangan sempurna dari kunjungan Anda.
          </p>
        </div>
      </section>
      <div class="grid grid-cols-2 mt-12 text-white sm:grid-cols-3 gap-x-3 sm:gap-x-10 gap-y-2 sm:gap-y-7 sm:px-8">
        <RouterLink
          v-for="umkm of umkmList"
          :key="umkm.id"
          :to="{ name: 'detailUmkm', params: { id: umkm.id } }"
          class="overflow-hidden bg-darkGreen rounded-xl group"
        >
          <div class="w-full aspect-[2/1] overflow-hidden">
            <img
              :src="`${baseURL}/umkm/image/card/${umkm.id}`"
              :alt="`gambar card untuk ${umkm.title}`"
              class="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
            >
          </div>
          <section class="px-2 py-3 space-y-1 sm:px-6 sm:py-7">
            <h3 class="text-sm font-semibold sm:text-xl">
              {{ umkm.title }}
            </h3>
            <p class="text-xs font-thin sm:text-base line-clamp-3">
              {{ umkm.description }}
            </p>
          </section>
        </RouterLink>
      </div>
    </div>
  </main>
</template>
