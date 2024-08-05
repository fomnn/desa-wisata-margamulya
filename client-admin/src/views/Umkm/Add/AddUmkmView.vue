<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { UmkmAddDataForm } from '@/types/umkm'
import { postUmkm } from '@/services/umkmService'
import LoadingView from '@/components/LoadingView.vue'

// Compositions -------------------------------

const router = useRouter()

// Data --------------------------------------

const umkmData = reactive<UmkmAddDataForm>({
  name: '',
  description: '',
  cardImage: null,
  heroImage: null,
  explanations: [
    {
      title: '',
      description: '',
      img: null,
    },
  ],
})

const explanationCount = ref(1)

const loadingPostUmkm = ref(false)

// Methods -----------------------------------

function handleAddExplanation() {
  explanationCount.value++
  umkmData.explanations.push({
    title: '',
    description: '',
    img: null,
  })
}

function handleCardImage(e: any) {
  umkmData.cardImage = e.target.files[0]
}
function handleHeroImage(e: any) {
  umkmData.heroImage = e.target.files[0]
}
function handleExplanationImage({ e, index }: { e: any, index: number }) {
  umkmData.explanations[index].img = e.target.files[0]
}

async function handlePostingUmkm() {
  loadingPostUmkm.value = true
  await postUmkm(umkmData)

  setTimeout(() => {
    loadingPostUmkm.value = false
    router.replace({ name: 'umkm' })
  }, 2000)
}
</script>

<template>
  <div class="">
    <div class="flex justify-between items-center">
      <h2 class="text-xl">Tambah UMKM</h2>
    </div>
    <form class="py-4 w-full space-y-3" @submit.prevent="handlePostingUmkm">
      <div class="flex gap-8">
        <div class="space-y-3 w-[65%]">
          <div class="container-input w-8/12">
            <label for="name">Nama Umkm</label>
            <input
              id="name"
              v-model="umkmData.name"
              required
              type="text"
              class=""
            >
          </div>
          <div class="container-input">
            <label for="description">Deskripsi</label>
            <textarea
              id="description"
              v-model="umkmData.description"
              class="w-full"
              required
            />
          </div>
        </div>
        <div class="flex gap-6 w-[35%]">
          <div class="container-input w-6/12">
            <label for="primary-img">Gambar Card</label>
            <input
              id="primary-img"
              required
              type="file"
              accept="image/*"
              :multiple="false"
              class=""
              @change="handleCardImage"
            >
          </div>
          <div class="container-input w-6/12">
            <label for="cover-img">Gambar Hero</label>
            <input
              id="cover-img"
              required
              type="file"
              accept="image/*"
              :multiple="false"
              class=""
              @change="handleHeroImage"
            >
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <h2 class="text-xl">Penjelasan UMKM</h2>
      </div>
      <div class="flex flex-col gap-2">
        <div v-for="i in explanationCount" :key="i" class="flex gap-5 border px-4 pb-3 pt-1.5 rounded-md">
          <div class="w-8/12">
            <div class="container-input">
              <label :for="`explanation-title-${i}`">Judul Penjelasan</label>
              <input
                :id="`explanation-title-${i}`"
                v-model="umkmData.explanations[i - 1].title"
                required
                type="text"
                class=""
              >
            </div>
            <div class="container-input">
              <label for="">Deskripsi Penjelasan</label>
              <textarea
                id=""
                v-model="umkmData.explanations[i - 1].description"
                class=""
                required
              />
            </div>
          </div>
          <div class="container-input w-4/12">
            <label for="">Gambar Penjelasan</label>
            <input
              id=""
              required
              type="file"
              accept="image/*"
              @change="(e) => handleExplanationImage({ e, index: i - 1 })"
            >
          </div>
        </div>
      </div>
      <div class="w-full flex justify-between gap-5">
        <button class="border text-xs py-1 h-fit px-5 rounded-md bg-slate-100" type="button" @click="handleAddExplanation">Tambah Penjelasan</button>
        <div class="flex gap-4">
          <button class="px-4 py-1 rounded-lg bg-slate-100 border border-slate-300" type="button">Batal</button>
          <button class="px-4 py-1 rounded-lg bg-green-100 border border-slate-300" type="submit">Tambah UMKM</button>
        </div>
      </div>
    </form>
    <LoadingView v-show="loadingPostUmkm" />
  </div>
</template>

<style scoped>
label {
  @apply text-sm;
}

.container-input {
  @apply flex flex-col gap-1;
}

input,
textarea {
  @apply border px-2 py-1 rounded-md
}
</style>
