<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import heroPaketWisataBgImage from '@/assets/img/heroPaketWisata.png'
import { axiosInstance } from '@/axios/instance'
import HeroComp from '@/components/Hero.comp.vue'
import formatPriceToRupiah from '@/utils/formatPriceToRupiah'

const tripList = ref<{ id: number, title: string, price: number }[]>([])
const tripFacilities = ref<{ id: number, facility: string, trip_package_id: number, order: number }[]>([])
const tripFacilitiesOrdered = computed(() => tripFacilities.value.sort((a, b) => a.order - b.order))

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

onMounted(() => {
  fetchTripList()
  fetchTripFacilities()
})
</script>

<template>
  <main>
    <!-- Container Hero -->
    <HeroComp :heroBgImage="heroPaketWisataBgImage" title="Paket Wisata Desa Wisata Margamulya" />

    <!-- Bagian Umkm Desa -->
    <div class="ct-container !pt-0">
      <section class="mb-12">
        <div class="">
          <h2 class="font-semibold text-center text-2xlv sm:text-4xl font-abhaya text-darkGreen">
            Wisata Alam Penuh Cerita di Desa Kami !
          </h2>
          <p class="mt-4 text-sm font-thin text-center text-pretty sm:text-base">
            Desa Wisata Margamulya menawarkan pengalaman terbaik dalam merasakan wisata alam di Bandung. Kami menawarkan pengalaman untuk terjun langsung dalam melakukan berbagai aktivitas seperti edukasi wisata peternakan kambing, edukasi wisata kebun teh dan merasakan pengalaman atraksi dari permainan tradisional yang kami miliki. Terdapat beberapa pilihan paket wisata yang dapat dipilih, seperti one day trip package dan overnight package untuk dapat merasakan pengalaman berwisata ditempat kami.
          </p>
        </div>
      </section>
      <div class="grid grid-cols-1 sm:grid-cols-2 w-fit mx-auto sm:px-[18%] gap-12">
        <div v-for="trip in tripList" :key="trip.id" class="flex flex-col justify-between p-6 text-white bg-darkGreen rounded-xl">
          <div class="mb-8 space-y-4">
            <h3 class="text-xl font-semibold sm:text-2xl">
              {{ trip.title }}
            </h3>
            <h4 class="text-xl font-semibold sm:text-2xl">
              {{ formatPriceToRupiah(trip.price) }}/pax
            </h4>
            <div class="">
              <p>Fasilitas:</p>
              <ul class="list-disc list-inside">
                <template v-for="fasilitas in tripFacilitiesOrdered" :key="fasilitas.id">
                  <li v-if="fasilitas.trip_package_id === trip.id" class="ml-3 text-sm font-thin text-wrap">
                    {{ fasilitas.facility }}
                  </li>
                </template>
              </ul>
            </div>
          </div>
          <a href="https://wa.me/6282132113029" class="text-center transition-colors duration-500 bg-white btn text-darkGreen hover:bg-darkGreen hover:text-white">
            Pesan Sekatang
          </a>
        </div>
        <!-- <div class="flex flex-col justify-between p-6 text-white bg-darkGreen rounded-xl">
          <div class="mb-8 space-y-4">
            <h3 class="text-2xl font-semibold">Overnight Trip Package</h3>
            <h4 class="text-2xl font-semibold">Rp. 475.000/pax</h4>
            <div class="">
              <p>Fasilitas:</p>
              <ul class="list-disc list-inside">
                <li v-for="fasilitas in fasilitasOvernightTrip" :key="fasilitas" class="ml-3 text-sm font-thin text-wrap">{{ fasilitas }}</li>
              </ul>
            </div>
          </div>
          <button class="transition-colors duration-500 bg-white btn text-darkGreen hover:bg-darkGreen hover:text-white">Pesan Sekatang</button>
        </div> -->
      </div>
    </div>
  </main>
</template>
