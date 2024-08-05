<script lang="ts" setup>
import { computed, ref } from 'vue'
import heroHubungiKamiBgImage from '@/assets/img/heroHubungiKami.png'
import FormkitWhatsapp from '~icons/formkit/whatsapp'
import FormkitInstagram from '~icons/formkit/instagram'
import FormkitTiktok from '~icons/formkit/tiktok'
import HeroComp from '@/components/Hero.comp.vue'

// Data ========================================================================

const whatsappNumber = '6282238382679'
const instagramUsername = 'instagram'
const tiktokUsername = 'tiktok'
const linkInstagram = `https://instagram.com/${instagramUsername}`
const linkTiktok = `https://tiktok.com/@${tiktokUsername}`
const linkWhatsapp = `https://wa.me/${whatsappNumber}`
const data = ref({
  namaDepan: '',
  namaBelakang: '',
  email: '',
  pesan: '',
})

const linkWhatsappGenerated = computed(() => {
  const messageToSend = `
    Nama: ${data.value.namaDepan} ${data.value.namaBelakang}
    Email: ${data.value.email}
    Pesan: 
    ${data.value.pesan}
  `
  return `https://wa.me/${whatsappNumber}?text=${messageToSend}`
})
</script>

<template>
  <main>
    <!-- Bagian Hero -->
    <HeroComp :heroBgImage="heroHubungiKamiBgImage" title="Hubungi Kami !" />

    <!-- Bagian Kontak -->
    <div class="ct-container sm:!px-80 !pt-0">
      <form>
        <h2 class="mb-8 text-4xl font-semibold text-center">
          Kontak
        </h2>
        <div class="">
          <div class="">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mb-3 gap-x-12 *:w-full">
              <label>
                <h4>Nama Depan</h4>
                <input v-model="data.namaDepan" type="text" class="w-full px-2 py-1 bg-zinc-100">
              </label>
              <label>
                <h4>Nama Belakang</h4>
                <input v-model="data.namaBelakang" type="text" class="w-full px-2 py-1 bg-zinc-100">
              </label>
              <label>
                <h4>Email</h4>
                <input v-model="data.email" type="email" class="w-full px-2 py-1 bg-zinc-100">
              </label>
            </div>
            <label>
              <h4>Pesan</h4>
              <textarea v-model="data.pesan" class="w-full px-2 py-1 resize-none bg-zinc-100 min-h-40" />
            </label>
          </div>
          <div class="flex items-center justify-between mt-5">
            <a :href="linkWhatsappGenerated" target="_blank" class="text-white btn bg-darkGreen">
              Kirim
            </a>
            <div class="flex items-center gap-2 text-xl text-darkGreen">
              <a :href="linkWhatsapp" target="_blank">
                <FormkitWhatsapp />
              </a>
              <a :href="linkInstagram" target="_blank">
                <FormkitInstagram />
              </a>
              <a :href="linkTiktok" target="_blank">
                <FormkitTiktok />
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>

    <!-- Bagian Maps -->
    <div class="ct-container sm:!px-20">
      <h2 class="mb-8 text-3xl font-semibold text-center">
        Lokasi Kami
      </h2>
      <div class="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63342.487346092115!2d107.42099573026549!3d-7.1369306799924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e688d7686b851e7%3A0xca6a616afd1b5b5d!2sMargamulya%2C%20Pasirjambu%2C%20Bandung%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1719551894217!5m2!1sen!2sid"
          style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full aspect-[7/12] sm:aspect-[3/1]"
        />
      </div>
    </div>
  </main>
</template>
