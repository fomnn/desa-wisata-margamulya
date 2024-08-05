<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { AxiosError } from 'axios'
import axiosInstance from '@/axios/instance'

const router = useRouter()

const loginData = reactive({
  email: '',
  password: '',
})

async function handleLogin() {
  try {
    const { data: { token } } = await axiosInstance.post<{ token: string }>('/auth/login', loginData)

    if (token) {
      localStorage.setItem('token', token)
      router.replace({ name: 'umkm' })
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.statusText)
      console.error(error.response?.status)
    }
  }
}
</script>

<template>
  <div class="grid h-screen grid-cols-2 p-2">
    <div class="bg-orange-100 rounded-md" style="background-image: url('/login-cover.jpg'); background-size: cover;" />
    <div class="flex items-center">
      <form class="w-full px-48" @submit.prevent="handleLogin">
        <h2 class="mb-4 text-xl">Selamat Datang</h2>
        <label>
          <span>Email</span>
          <input
            v-model="loginData.email"
            type="email"
            class="px-2 py-1 border rounded-md"
          >
        </label>
        <label>
          <span>Password</span>
          <input
            v-model="loginData.password"
            type="password"
            class="px-2 py-1 border rounded-md"
          >
        </label>
        <button type="submit" class="w-full py-1 mt-4 text-center text-white bg-green-600 rounded-md">Masuk</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
span,
label,
input {
  display: block;
}

input {
  width: 100%;
}
</style>
