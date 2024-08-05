<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { AxiosError } from 'axios'
import { onMounted, reactive, ref } from 'vue'
import axiosInstance from '@/axios/instance'
import MaterialSymbolsLightDeleteOutlineSharp from '~icons/material-symbols-light/delete-outline-sharp'
import LoadingView from '@/components/LoadingView.vue'

// Compositions ========================

const route = useRoute()
const router = useRouter()

// Data ================================

const tripId = Number(route.params.id)
const tripForm = ref<{ title: string, price: number }>({
  title: '',
  price: 0,
})
const tripFacilitiesIdToDelete = ref<number[]>([])
const tripFacilitiesForm = reactive<string[]>([''])
const loadingSubmit = ref(false)

// Methods =============================

async function fetchTripPackage() {
  try {
    const { data } = await axiosInstance.get(`/trip-packages?id=${tripId}`)
    tripForm.value = { ...data }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data)
      console.error(error.response?.status)
    }
  }
}

async function fetchTripFacilities() {
  try {
    const { data } = await axiosInstance.get<{ id: number, facility: string, trip_package_id: number, order: number }[]>(`/trip-packages/${tripId}/facilities`)
    data.forEach(facility => tripFacilitiesForm[facility.order - 1] = facility.facility)
    tripFacilitiesIdToDelete.value = data.map(facility => facility.id)
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data)
      console.error(error.response?.status)
    }
  }
}

function addTripFacilities() {
  tripFacilitiesForm.push('')
}

function deleteTripFacilities(index: number) {
  if (tripFacilitiesForm.length === 1)
    return tripFacilitiesForm[0] = ''
  tripFacilitiesForm.splice(index, 1)
}

async function handleEditTripPackage() {
  try {
    await axiosInstance.put(`/trip-packages/${tripId}`, tripForm.value)
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data)
      console.error(error.response?.status)
    }
  }
}

async function handleEditTripFacilities() {
  try {
    const tripFacilitiesToPost = tripFacilitiesForm.map((facility, index) => ({ facility, order: index + 1 }))
    tripFacilitiesToPost.forEach(async (facility) => {
      if (facility.facility !== '') {
        await axiosInstance.post(`/trip-packages/${tripId}/facilities`, facility)
      }
    })
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data)
      console.error(error.response?.status)
      console.error(error.response?.statusText)
    }
  }
}

async function handleDeleteTripFacilities() {
  try {
    tripFacilitiesIdToDelete.value.forEach(async (id) => {
      await axiosInstance.delete(`/trip-packages/facilities/${id}`)
    })
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data)
      console.error(error.response?.status)
      console.error(error.response?.statusText)
    }
  }
}

async function submit() {
  loadingSubmit.value = true
  await handleEditTripPackage()
  await handleEditTripFacilities()
  await handleDeleteTripFacilities()
  setTimeout(() => {
    loadingSubmit.value = false
  }, 2000)
  router.push('/trip-package')
}

// Lifecycle Hooks =====================

onMounted(() => {
  fetchTripPackage()
  fetchTripFacilities()
})
</script>

<template>
  <div class="">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-semibold">Paket Wisata</h2>
    </div>
    <form class="space-y-2 py-4" @submit.prevent="submit">
      <div class="container-input">
        <label for="title" class="text-lg">Nama Paket</label>
        <input
          id="title"
          v-model="tripForm.title"
          class="w-4/12"
          type="text"
        >
      </div>
      <div class="container-input">
        <label for="price" class="text-lg">Harga</label>
        <input
          id="price"
          v-model.number="tripForm.price"
          class="w-4/12"
          type="number"
        >
      </div>
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-">Paket Wisata</h2>
      </div>
      <ol class="list-decimal list-inside px-1 space-y-2">
        <li v-for="(i) in tripFacilitiesForm.length" :key="i" class="">
          <input v-model="tripFacilitiesForm[i - 1]" type="text" class="mx-2 w-4/12">
          <button type="button" class="inline bg-slate-200 p-0.5 rounded-md" @click="() => deleteTripFacilities(i - 1)"><MaterialSymbolsLightDeleteOutlineSharp /></button>
        </li>
      </ol>
      <div class="">
        <button type="button" class="bg-slate-100 border border-slate-300 text-slate-600 text-xs px-2 py-1 rounded-md" @click="addTripFacilities">Tambah Fasilitas</button>
      </div>
      <div class="py-4">
        <button type="submit" class="bg-green-300 text-base px-5 py-1 rounded-md">Edit Paket Wisata</button>
      </div>
    </form>
    <LoadingView v-if="loadingSubmit" />
  </div>
</template>

<style scoped>
.container-input {
  @apply flex flex-col gap-1;
}

input,
textarea {
  @apply border px-2 py-1 rounded-md
}
</style>
