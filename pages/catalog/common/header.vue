<script lang="ts" setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

defineProps({
    isActive: String
})

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Find accommodation',
                link: '/catalog'
            },
            {
                title: 'Berlin Business Hotel'
            }
        ]
    }
])
</script>
<template>
    <section class="container pt-5 mt-5">
        <!-- Breadcrumb-->
        <Breadcrumb :data="breadcrumbData" />

        <div class="d-sm-flex align-items-center justify-content-between mb-4 pb-sm-2">
            <h1 class="h2 me-3 mb-sm-0">Berlin Business Hotel</h1>
            <div class="text-nowrap">
                <button class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-title="Add to Favorites">
                    <i class="fi-heart"></i>
                </button>
                <div class="dropdown d-inline-block" data-bs-toggle="tooltip" data-bs-title="Share">
                    <button class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2" type="button" data-bs-toggle="dropdown">
                        <i class="fi-share"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end my-1">
                        <button class="dropdown-item" type="button">
                            <i class="fi-facebook fs-base opacity-75 me-2"></i>Facebook
                        </button>
                        <button class="dropdown-item" type="button">
                            <i class="fi-twitter fs-base opacity-75 me-2"></i>Twitter
                        </button>
                        <button class="dropdown-item" type="button">
                            <i class="fi-instagram fs-base opacity-75 me-2"></i>Instagram
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Nav pills hidden-->
        <!-- <ul class="nav nav-pills border-bottom pb-3 mb-4">
            <li class="nav-item">
                <nuxt-link class="nav-link d-flex align-items-center" :class="{ 'active' : isActive === 'single'}" to="/catalog/single"><i class="fi-image me-2"></i>Gallery</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link d-flex align-items-center" :class="{ 'active' : isActive === 'single-info'}" to="/catalog/single-info"><i class="fi-info-circle me-2"></i>Info</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link d-flex align-items-center" :class="{ 'active' : isActive === 'single-reviews'}" to="/catalog/single-review"><i class="fi-edit me-2"></i>Reviews</nuxt-link>
            </li>
        </ul> -->
    </section>
</template>