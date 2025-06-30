<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
    isActive: String
})

const handleLogout = async () => {
  try {
    await $fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
  } catch (error) {
    console.error('Logout error:', error)
  }
}

onMounted(() => {
    document.body.classList.add('bg-secondary');
})

onUnmounted(() => {
    document.body.classList.remove('bg-secondary');
})
</script>
<template>
    <div class="mt-md-n3 mb-4">
        <a class="btn btn-outline-primary btn-lg rounded-pill w-100 d-md-none" data-bs-target="#account-nav" data-bs-toggle="collapse">
            <i class="fi-align-justify me-2"></i>Account Menu
        </a>
        <div class="collapse d-md-block" id="account-nav">
            <ul class="nav nav-pills flex-column flex-md-row pt-3 pt-md-0 pb-md-4 border-bottom-md">
                <li class="nav-item mb-md-0 me-md-2 pe-md-1">
                    <nuxt-link class="nav-link" :class="{ 'active' : isActive === 'info'}" to="/account/info" aria-current="page">
                        <i class="fi-user mt-n1 me-2 fs-base"></i>Personal Info
                    </nuxt-link>
                </li>
                <li class="nav-item mb-md-0 me-md-2 pe-md-1">
                    <nuxt-link class="nav-link" :class="{ 'active' : isActive === 'favorites'}" to="/account/favorites">
                        <i class="fi-heart mt-n1 me-2 fs-base"></i>Favorites
                    </nuxt-link>
                </li>
                <li class="nav-item mb-md-0 me-md-2 pe-md-1">
                    <nuxt-link class="nav-link" :class="{ 'active' : isActive === 'reviews'}" to="/account/reviews">
                        <i class="fi-star mt-n1 me-2 fs-base"></i>Reviews
                    </nuxt-link>
                </li>
                <li class="nav-item mb-md-0">
                    <nuxt-link class="nav-link" :class="{ 'active' : isActive === 'notifications'}" to="/account/notifications">
                        <i class="fi-bell mt-n1 me-2 fs-base"></i>Notifications
                    </nuxt-link>
                </li>
                <li class="nav-item d-md-none">
                    <a class="nav-link" href="#" @click.prevent="handleLogout">
                        <i class="fi-logout mt-n1 me-2 fs-base"></i>Sign Out
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>