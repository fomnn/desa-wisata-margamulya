<script lang="ts" setup>
import { RouterView } from 'vue-router'
import NavComp from '@/components/DashboardLayout/NavComp.vue'
</script>

<template>
  <div class="flex h-screen">
    <NavComp class="w-2/12 px-6 pb-4 pt-6 border-r" />
    <RouterView class="w-10/12 pl-8 pr-12 py-5 h-screen overflow-x-auto" />
  </div>
</template>
