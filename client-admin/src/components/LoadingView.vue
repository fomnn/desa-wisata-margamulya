<script lang="ts" setup>
import LineMdUploadingLoop from '~icons/line-md/uploading-loop'
</script>

<template>
  <div class="bg-black/30 absolute top-0 left-0 w-full h-full z-50">
    <div class="absolute bg-white px-8 py-5 rounded-md right-36 bottom-24 text-black opacity-100 flex gap-5 items-center">
      <LineMdUploadingLoop class="w-12 h-12 text-slate-500" />
      <div class="">
        <h1 class="font-semibold">Sedang Mengupload</h1>
        <p class="flex items-center gap-2">Silahkan tunggu</p>
      </div>
    </div>
  </div>
</template>
