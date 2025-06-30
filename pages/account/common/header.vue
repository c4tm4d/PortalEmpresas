<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref<any>(null)
const isLoading = ref(true)

// Fetch user session
const fetchUser = async () => {
  try {
    const userData = await $fetch('/api/auth/me')
    user.value = userData
  } catch (error) {
    // Redirect to login if not authenticated
    router.push('/auth/signin-light')
  } finally {
    isLoading.value = false
  }
}

// Logout function
const handleLogout = async () => {
  try {
    await $fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
  } catch (error) {
    console.error('Logout error:', error)
  }
}

onMounted(() => {
  fetchUser()
})
</script>

<template>
    <div v-if="!isLoading && user" class="d-flex align-items-center justify-content-between pb-4 mb-2">
        <div class="d-flex align-items-center">
            <div class="position-relative flex-shrink-0">
                <img class="rounded-circle border border-white" :src="user.avatar || '/assets/img/avatars/29.png'" width="100" :alt="user.name">
                <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm position-absolute end-0 bottom-0" type="button" data-bs-toggle="tooltip" data-bs-title="Change image">
                    <i class="fi-pencil fs-xs"></i>
                </button>
            </div>
            <div class="ps-3 ps-sm-4">
                <h3 class="h4 mb-2">{{ user.name }}</h3>
                <span class="star-rating">
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                </span>
            </div>
        </div>
        <a class="nav-link p-0 d-none d-md-block" href="#" @click.prevent="handleLogout">
            <i class="fi-logout mt-n1 me-2"></i>Sign out
        </a>
    </div>
</template>