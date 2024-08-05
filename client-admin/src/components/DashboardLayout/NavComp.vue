<script lang="ts" setup>
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

async function handleLogout() {
  localStorage.removeItem('token')
  router.replace({ name: 'login' })
}
</script>

<template>
  <nav class="flex flex-col justify-between">
    <div class="flex flex-col gap-2">
      <h1 class="font-semibold text-sm">Admin Desa Margamulya</h1>
      <div class="w-full h-[1px] bg-slate-300" />
      <div class="flex flex-col gap-1">
        <RouterLink
          :to="{ name: 'umkm' }"
          class="hover:bg-slate-50 px-1.5 py-1 rounded-sm text-sm font-semibold text-slate-600"
        >
          UMKM
        </RouterLink>
        <RouterLink
          :to="{ name: 'trip-package' }"
          class="hover:bg-slate-50 px-1.5 py-1 rounded-sm text-sm font-semibold text-slate-600"
        >
          Paket Wisata
        </RouterLink>
      </div>
    </div>
    <div class="flex flex-col gap-0.5">
      <button
        class="bg-slate-50 hover:bg-slate-100 px-1.5 py-1 rounded-sm text-sm font-normal text-slate-600"
        @click="handleLogout"
      >
        Keluar dari
        akun
      </button>
    </div>
  </nav>
</template>
