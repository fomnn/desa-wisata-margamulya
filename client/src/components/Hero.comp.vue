<script lang="ts" setup>
defineProps<{
  heroBgImage: string
  title: string
}>()
</script>

<template>
  <!-- Container Hero -->
  <div
    class="h-[30vh] sm:h-[55vh] bg-cover text-white text-xl sm:text-5xl flex flex-col items-center justify-center font-semibold mb-6 sm:mb-40 px-12 text-center"
    :style="{ backgroundImage: `url(${heroBgImage})` }"
  >
    <h1 class="font-abhaya">
      {{ title }}
    </h1>
  </div>
</template>
