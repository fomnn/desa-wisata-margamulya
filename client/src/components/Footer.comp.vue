<script lang="ts" setup>
import logoFooter from '@/assets/logo.png'
import logoTelkom from '@/assets/img/logo-telkom.png'
import logoInnovilage from '@/assets/img/logo-innovillage.png'
import logoBumn from '@/assets/img/logo-bumn.png'
</script>

<template>
  <footer class="flex sm:flex-row flex-col sm:justify-between sm:gap-32 sm:pl-32 px-20 sm:pr-48 pb-20 mt-64">
    <div class="sm:w-3/12 aspect-square -translate-y-6">
      <img :src="logoFooter" alt="" class="w-full h-full object-contain">
    </div>
    <div class="grid grid-cols-1 gap-10 sm:gap-20 sm:grid-cols-3">
      <div class="space-y-5 sm:px-4">
        <h2 class="font-semibold text-xl sm:text-lg">
          Navigasi
        </h2>
        <div class="flex flex-col gap-1 sm:text-base text-sm text-slate-500">
          <RouterLink to="/">
            Beranda
          </RouterLink>
          <RouterLink :to="{ name: 'profilDesa' }">
            Tentang
          </RouterLink>
          <RouterLink :to="{ name: 'paketWisata' }">
            Paket Wisata
          </RouterLink>
          <RouterLink :to="{ name: 'umkm' }">
            UMKM
          </RouterLink>
          <RouterLink :to="{ name: 'hubungiKami' }">
            Kontak
          </RouterLink>
        </div>
      </div>
      <div class="space-y-5 sm:px-4">
        <h2 class="font-semibold text-xl sm:text-lg">
          Media Sosial
        </h2>
        <div class="space-y-1 sm:text-base text-sm text-slate-500 flex flex-col">
          <a target="_blank" href="https://wa.me/6282132113029">Whatsapp</a>
          <a target="_blank" href="https://www.instagram.com/dwisata_margamulya?igsh=MTVmdW83MTMzMTMyYw==">Instagram</a>
          <a target="_blank" href="https://www.tiktok.com/@visitmargamulya">Tiktok</a>
          <a target="_blank" href="https://www.youtube.com/@GayaMargamulya">Youtube</a>
        </div>
      </div>
      <div class="space-y-5">
        <h2 class="font-semibold text-xl sm:text-lg">
          Didukung Oleh
        </h2>
        <div class="space-y-1">
          <img :src="logoTelkom" alt="logo telkom" class="w-10/12">
          <img :src="logoInnovilage" alt="logo Innovilage" class="w-10/12">
          <img :src="logoBumn" alt="logo Bumn" class="w-10/12">
        </div>
      </div>
    </div>
  </footer>
</template>
