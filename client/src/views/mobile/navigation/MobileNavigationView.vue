<script lang="ts" setup>
import { useRouter } from 'vue-router'
import MaterialSymbolsCloseRounded from '~icons/material-symbols/close-rounded'

const router = useRouter()
</script>

<template>
  <div class="absolute top-0 w-screen h-screen left-0 bg-darkGreen text-white px-10 py-10 flex flex-col gap-4 text-2xl">
    <RouterLink :to="{ name: 'home' }">Beranda</RouterLink>
    <RouterLink :to="{ name: 'profilDesa' }">Profil Desa</RouterLink>
    <RouterLink :to="{ name: 'paketWisata' }">Paket Wisata</RouterLink>
    <RouterLink :to="{ name: 'umkm' }">UMKM</RouterLink>
    <RouterLink :to="{ name: 'hubungiKami' }">Kontak</RouterLink>
    <button class="absolute top-10 right-10" @click="router.back()"><MaterialSymbolsCloseRounded class="text-3xl" /></button>
  </div>
</template>
