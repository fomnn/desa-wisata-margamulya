<script setup lang="ts">
import heroProfilBgImage from '@/assets/img/heroProfil.png'
import strukturOrganisasiImage from '@/assets/img/struktur-organisasi.png'
import HeroComp from '@/components/Hero.comp.vue'

// Data ========================================

const perangkatDesaList: { name: string, department: string }[] = [
  {
    name: 'Dede Odih',
    department: 'Kepala Desa Margamulya',
  },
  {
    name: 'H. Yudi Indra Purnawan, SE',
    department: 'Sekretaris Desa',
  },
  {
    name: 'Fajar MM',
    department: 'Kasi Pemerintahan',
  },
  {
    name: 'Iyep Khoerudin',
    department: 'Kasi Pelayanan',
  },
  {
    name: 'Cece Casmana',
    department: 'Kasi Kesejahteraan',
  },
  {
    name: 'Dida Wardiat',
    department: 'Kaur Umum',
  },
  {
    name: 'Indra Setia Permana',
    department: 'Kaur Perencanaan',
  },
  {
    name: 'Asep Kartiwa',
    department: 'Kaur Keuangan',
  },
  {
    name: 'Iden Rohendi',
    department: 'Iyan barnawan',
  },
  {
    name: 'Iyan barnawan',
    department: 'Kedus II',
  },
  {
    name: 'Bambang Agustaman',
    department: 'Kedus III',
  },
  {
    name: 'Hendra',
    department: 'Kedus IV',
  },
  {
    name: 'Rosianti',
    department: 'Staf',
  },
  {
    name: 'Ujang Herdianto, S.Pd',
    department: 'Staf',
  },
]
</script>

<template>
  <main>
    <!-- Container Hero -->
    <HeroComp :heroBgImage="heroProfilBgImage" title="Profil Desa Wisata Margamulya" />

    <!-- Bagian Sejarah -->
    <section class="px-6 sm:px-20 py-5 sm:py-10 w-full sm:w-1/2 space-y-4">
      <h2 class="text-3xl sm:text-4xl font-semibold font-abhaya text-darkGreen">
        Sejarah Desa
      </h2>
      <p class="text-sm sm:text-base font-thin">
        Desa margamulya berawal dari Desa Kecil yang bernama Desa CIHANJAWAR . Pada tahun 1882 uKab Bandung mempunyai 18
        Distrik dan Desa Cihanjawar termasuk distrik Ciwidey sekitar tahun pada waktu itu Desa Cihanjawar termasuk
        distrik Ciwidey . Lurah Desa Cihanjawar Pertama adalah Lurah TOLOK yaitu sekitar tahun 1860 dan Lurah Tolok
        tersebut pada waktu itu telah membangun Kantor Desa di Kp. Nagrak karena Lurah tolok sudah memberi jasa pada
        Desa nya maka Pemerintah Belanda memberi Gelar yaitu sebutan Lurah Medali. Jabatan Lurah TOLOK dari tahun 1860
        sampai dengan 1880 ( selama 20 Tahun ).
      </p>
    </section>

    <!-- Bagian Visi dan Misi -->
    <div class="py-10 px-8 sm:px-36 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-24">
      <!-- Visi -->
      <section class="space-y-3 sm:space-y-8">
        <h3 class="text-start sm:text-center text-3xl sm:text-4xl font-semibold font-abhaya text-darkGreen">
          Visi
        </h3>
        <p class="text-sm sm:text-base font-thin text-center">
          Terwujudnya masyarakat Desa Margamulya yang repeh,rapih kertaraharja, melalui akselerasi, pembangunan partisipatif yang berbasis Religius, kultural, berwawasan Lingkungan dengan berorientasi dalam kemajuan kinerja serta pembangunan yang sinergis.
        </p>
      </section>

      <!-- Misi -->
      <section class="space-y-3 sm:space-y-8">
        <h3 class="text-start sm:text-center text-3xl sm:text-4xl font-semibold font-abhaya text-darkGreen">
          Misi
        </h3>
        <div class="text-sm sm:text-base font-thin">
          <ol class="list-decimal list-inside">
            <li>Mewujudkan Pemerintah Desa yang baik</li>
            <li>Meningkatkan Kinerja Pemerintah Desa</li>
            <li>Meningkatkan sosial ekonomi masyarakat</li>
            <li>Membangkitkan dan menumbuhkembangkan budaya sunda</li>
            <li>Memelihara keseimbangan hidup</li>
            <li>Meningkatkan taraf hidup dan pendidikan masyarakat.</li>
          </ol>
        </div>
      </section>
    </div>

    <!-- Bagian Susunan Perangkat Desa -->
    <div class="ct-container">
      <div class="*:text-center mb-20">
        <h2 class="text-4xl mb-2 font-bold font-abhaya text-darkGreen">
          Susunan Perangkat Desa Wisata Margamulya
        </h2>
        <p class="text-lg">
          Peride 2020-2025
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-16">
        <div v-for="(perangkatDesa, i) of perangkatDesaList" :key="i" class="*:text-center space-y-2 sm:first:col-span-3 sm:last:col-span-3 group">
          <h3 class="text-xl sm:text-2xl font-semibold group-first:text-2xl group-first:sm:text-3xl text-darkGreen font-abhaya">
            {{ perangkatDesa.name }}
          </h3>
          <p>{{ perangkatDesa.department }}</p>
        </div>
      </div>
    </div>

    <!-- Bagian Struktur Organisasi Pemerintahan -->
    <div class="ct-container">
      <div class="font-bold text-4xl text-center mb-20">
        <h2 class="font-abhaya text-darkGreen">
          Struktur Organisasi Pemerintahan
        </h2>
        <h2 class="font-abhaya text-darkGreen">
          Desa Margamulya
        </h2>
      </div>
      <img :src="strukturOrganisasiImage" alt="">
    </div>
  </main>
</template>

<style scoped></style>
