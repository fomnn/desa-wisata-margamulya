import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { AxiosError } from 'axios'
import axiosInstance from '@/axios/instance'

export const useAuthStore = defineStore('auth', () => {
  const isLogin = ref(false)
  const token = ref('')

  function login() {
    isLogin.value = true
  }
  function logout() {
    isLogin.value = false
  }

  async function verifyToken() {
    const router = useRouter()
    const token = localStorage.getItem('token')
    if (!token)
      return router.replace({ name: 'login' })

    try {
      await axiosInstance.post('/auth/verify-token', null, { headers: { Authorization: `Bearer ${token}` } })
      login()
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error)
        logout()
        router.replace({ name: 'login' })
      }
    }
  }

  return {
    isLogin,
    token,
    login,
    logout,
    verifyToken,
  }
})
