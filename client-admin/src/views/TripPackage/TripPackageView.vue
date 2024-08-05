<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import axiosInstance from '@/axios/instance'
import formatPriceToRupiah from '@/utils/formatPriceToRupiah'

// Data ================================

const tripList = ref<{ id: number, title: string, price: number }[]>([])
const tripFacilities = ref<{ id: number, facility: string, trip_package_id: number, order: number }[]>([])
const tripFacilitiesOrdered = computed(() => tripFacilities.value.sort((a, b) => a.order - b.order))

// Methods =============================

async function fetchTripList() {
  try {
    const { data } = await axiosInstance.get('/trip-packages')
    tripList.value = data
  } catch (error) {

  }
}

async function fetchTripFacilities() {
  try {
    const { data } = await axiosInstance.get<{ id: number, facility: string, trip_package_id: number, order: number }[]>('/trip-packages/facilities')
    tripFacilities.value = data
  } catch (error) {

  }
}

// Lifecycle ===========================

onMounted(() => {
  fetchTripList()
  fetchTripFacilities()
})
</script>

<template>
  <div class="">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-semibold">Paket Wisata</h2>
    </div>
    <div class="py-6 grid grid-cols-3 gap-11">
      <div v-for="trip in tripList" :key="trip.id" class="bg-darkGreen w-full px-10 py-5 rounded-xl text-white flex flex-col gap-3">
        <h3 class="font-semibold text-lg">{{ trip.title }}</h3>
        <p class="font-semibold text-lg">{{ formatPriceToRupiah(trip.price) }}/pax</p>
        <div class="">
          <h4>Fasilitas :</h4>
          <ul class="text-sm px-2">
            <template v-for="facility in tripFacilitiesOrdered" :key="facility.id">
              <li v-if="facility.trip_package_id === trip.id">{{ facility.facility }}</li>
            </template>
          </ul>
        </div>
        <RouterLink :to="{ name: 'detail-trip-package', params: { id: trip.id } }" class="text-center py-1 mt-6 bg-white text-darkGreen rounded-full font-semibold">Edit</RouterLink>
      </div>
    </div>
  </div>
</template>
