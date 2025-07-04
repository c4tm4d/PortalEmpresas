<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { ref, computed } from 'vue'

// Fetch businesses from API
const { data: businesses, pending } = await useFetch('/api/businesses/public');

// Show all businesses (no filtering)
const allBusinesses = computed(() => {
    if (!businesses.value) return [];
    return businesses.value.slice(0, 12); // Show max 12 businesses
});

const modules = ref([Navigation]);

const swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        582: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});
</script>
<template>
    <section class="container mb-sm-5 mb-4 pb-lg-4">
        <div class="d-sm-flex align-items-center justify-content-between mb-4 pb-2">
            <h2 class="h3 mb-sm-0">Todas as Empresas</h2>
            <nuxt-link class="btn btn-link fw-normal ms-sm-3 p-0" to="/catalog">Ver tudo<i class="fi-arrow-long-right ms-2"></i></nuxt-link>
        </div>
        
        <div v-if="pending" class="text-center py-4">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        
        <div v-else-if="allBusinesses.length === 0" class="text-center py-4">
            <p class="text-muted">Nenhuma empresa disponível no momento.</p>
        </div>
        
        <swiper v-else :modules="modules" :breakpoints="swiperOptions.breakpoints" navigation :loop="true" class="h-100vh">
            <SwiperSlide v-for="business in allBusinesses" :key="business.id">
                <div class="position-relative">
                    <div class="position-relative mb-3">
                        <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Adicionar aos Favoritos">
                            <i class="fi-heart"></i>
                        </button>
                        <img class="rounded-3" :src="business.logo || '/placeholder.png'" alt="Imagem" style="width: 100%; height: 200px; object-fit: cover;" />
                    </div>
                    <h3 class="mb-2 fs-lg">
                        <nuxt-link class="nav-link stretched-link" :to="`/catalog/single?id=${business.id}`">{{ business.name }}</nuxt-link>
                    </h3>
                    <ul class="list-inline mb-0 fs-xs">
                        <li class="list-inline-item pe-1">
                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>{{ business.address }}
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-list mt-n1 me-1 fs-base text-muted align-middle"></i>{{ business.category?.name }}
                        </li>
                    </ul>
                </div>
            </SwiperSlide>
        </swiper>
    </section>
</template>
