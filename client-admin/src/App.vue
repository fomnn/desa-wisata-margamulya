<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'

const { verifyToken } = useAuthStore()

onMounted(async () => {
  await verifyToken()
})
</script>

<template>
  <div class="">
    <RouterView class="" />
    <div class="block sm:hidden absolute bg-white w-screen h-screen top-0 left-0" />
  </div>
</template>

<style scoped></style>
