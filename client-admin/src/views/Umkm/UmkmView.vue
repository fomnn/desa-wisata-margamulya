<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { AxiosError } from 'axios'
import axiosInstance, { baseURL } from '@/axios/instance'
import type { Umkm } from '@/types/umkm'
import { getUmkmList } from '@/services/umkmService'
import PhDotsThreeVerticalBold from '~icons/ph/dots-three-vertical-bold'

// Data ================================

const umkmList = ref<Umkm[]>([])

// Methods =============================

async function fetchData() {
  umkmList.value = await getUmkmList()
}

function showMenu(id: number) {
  const menu = document.getElementById(`menu-${id}`)
  if (!menu) return
  menu.classList.toggle('hidden')
}

async function handleDeleteUmkmById(id: number) {
  try {
    await axiosInstance.delete(`/umkm/${id}`)
    fetchData()
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data)
    }
  }
}

// Lifecycle ===========================

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-semibold">UMKM</h2>
      <RouterLink :to="{ name: 'umkm-add' }" class="bg-orange-300 px-6 py-1 rounded-md">Tambah Umkm</RouterLink>
    </div>
    <div class="py-6 grid grid-cols-7 gap-x-5 gap-y-6">
      <div
        v-for="umkm of umkmList"
        :key="umkm.id"
        class="border px-2 py-3 space-y-1.5 rounded-md "
      >
        <img :src="`${baseURL}/umkm/image/card/${umkm.id}`" alt="gambar" class="w-full aspect-square object-cover rounded-md bg-slate-200">
        <div class="flex justify-between gap-2 relative">
          <h2 class="text-center line-clamp-2 w-full">{{ umkm.title }}</h2>
          <button><PhDotsThreeVerticalBold class="text-xs" @click="() => showMenu(umkm.id)" /></button>
          <div :id="`menu-${umkm.id}`" class="bg-white border px-1 py-1 absolute bottom-[101%] right-0 hidden">
            <button class="hover:bg-slate-200 px-3" @click="() => handleDeleteUmkmById(umkm.id)">Hapus</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
