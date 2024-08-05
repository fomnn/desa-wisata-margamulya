<script lang="ts" setup>
import { AxiosError } from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import HeroComp from '@/components/Hero.comp.vue'
import { axiosInstance, baseURL } from '@/axios/instance'

// Compositions ----------------------

const route = useRoute()

// Data ------------------------------

const umkmId = route.params.id
const umkmData = ref<{ id: number, title: string, description: string }>()
const umkmExplanations = ref<{ id: number, title: string, description: string, img: string }[]>()

// Methods ---------------------------

async function fetchUmkm() {
  const { data } = await axiosInstance.get(`/umkm?umkmId=${umkmId}`)
  umkmData.value = data
}

async function fetchUmkmExplanations() {
  try {
    const { data } = await axiosInstance.get(`/umkm/${umkmId}/explanation`)
    umkmExplanations.value = data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data)
    }
  }
}

// Lifecycle Hooks --------------------

onMounted(() => {
  fetchUmkm()
  fetchUmkmExplanations()
})
</script>

<template>
  <div>
    <HeroComp v-if="umkmData" :heroBgImage="`${baseURL}/umkm/image/hero/${umkmData!.id}`" :title="umkmData!.title!" />
    <div class="ct-container sm:!px-20 space-y-24">
      <div v-for="(explanation, i) in umkmExplanations" :key="i" class="flex flex-col-reverse sm:flex-row sm:even:flex-row-reverse gap-5 sm:gap-12">
        <div class="w-full sm:w-[52%] space-y-2">
          <h3 class="text-3xl font-semibold font-abhaya text-darkGreen">
            {{ explanation.title }}
          </h3>
          <p class="text-lg font-thin">
            {{ explanation.description }}
          </p>
        </div>
        <img :src="`${baseURL}/umkm/explanation/image/${explanation.id}`" alt="" class="w-full sm:w-[48%] aspect-video object-cover">
      </div>
    </div>
  </div>
</template>
