<script lang="ts" setup>
import Header from './common/header.vue';
import RecentlyViewed from './common/recently-view.vue';

import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

// If you are using scss you can skip the css imports below and use scss instead
import 'lightgallery/scss/lightgallery.scss'

import map from "@/assets/img/city-guide/single/map.jpg"

import single01 from "@/assets/img/city-guide/single/01.jpg";
import single02 from "@/assets/img/city-guide/single/02.jpg";
import single03 from "@/assets/img/city-guide/single/03.jpg";
import single04 from "@/assets/img/city-guide/single/04.jpg";
import single05 from "@/assets/img/city-guide/single/05.jpg";
import single06 from "@/assets/img/city-guide/single/06.jpg";
import single07 from "@/assets/img/city-guide/single/07.jpg";
import single08 from "@/assets/img/city-guide/single/08.jpg";

const pluginsData = [lgThumbnail, lgZoom];

definePageMeta({
    title: 'Business Details',
});

// Get business ID from query parameter
const route = useRoute();
const businessId = route.query.id;

// Fetch business data
const { data: business, pending, error } = await useFetch(`/api/businesses/public/${businessId}`);

// Handle case when business is not found
if (!business.value && !pending.value) {
    throw createError({
        statusCode: 404,
        message: 'Business not found'
    });
}

// Set dynamic page title
useHead(() => ({
    title: business.value?.name || 'Business Details'
}));

// Computed properties for business data
const businessPhotos = computed(() => {
    return business.value?.photos || [];
});

const hasPhotos = computed(() => {
    return businessPhotos.value.length > 0;
});

const primaryPhoto = computed(() => {
    return businessPhotos.value.find((photo: any) => photo.isPrimary) || businessPhotos.value[0];
});

const secondaryPhotos = computed(() => {
    return businessPhotos.value.slice(1, 3);
});

const remainingPhotos = computed(() => {
    return businessPhotos.value.slice(4);
});

const hasSocialMedia = computed(() => {
    return business.value?.facebook || business.value?.instagram || business.value?.twitter || business.value?.linkedin;
});
</script>

<template>
    <!-- Page header-->
    <Header :title="business?.name" :subtitle="business?.category?.name" isActive="single" />

    <!-- Loading state -->
    <div v-if="pending" class="container py-5">
        <div class="text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">Loading business details...</p>
        </div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="container py-5">
        <div class="text-center">
            <i class="fi-alert-circle display-4 text-danger mb-3"></i>
            <h3>Error loading business</h3>
            <p class="text-muted">Failed to load business details. Please try again.</p>
        </div>
    </div>

    <!-- Business content -->
    <div v-else-if="business" class="container overflow-auto mb-4 pb-3">
        <!-- Gallery -->
        <div v-if="hasPhotos" class="row g-2 g-md-3 gallery" style="min-width: 30rem">
            <div class="col-8">
                <lightgallery :settings="{ speed: 500, plugins: pluginsData }">
                    <a class="gallery-item rounded rounded-md-3" :href="primaryPhoto?.url">
                        <img :alt="business.name" :src="primaryPhoto?.url || business.logo || '/placeholder.png'" />
                    </a>
                </lightgallery>
            </div>
            <div class="col-4">
                <lightgallery :settings="{ speed: 500, plugins: pluginsData }">
                    <a v-for="photo in secondaryPhotos" :key="photo.id" class="gallery-item rounded rounded-md-3 mb-2 mb-md-3" :href="photo.url">
                        <img :alt="business.name" :src="photo.url" />
                    </a>
                </lightgallery>
            </div>
            <div v-if="remainingPhotos.length > 0" class="col-12">
                <div class="row g-2 g-md-3">
                    <div v-for="photo in remainingPhotos.slice(0, 5)" :key="photo.id" class="col">
                        <lightgallery :settings="{ speed: 500, plugins: pluginsData }">
                            <a class="gallery-item rounded rounded-md-3" :href="photo.url">
                                <img :alt="business.name" :src="photo.url" />
                            </a>
                        </lightgallery>
                    </div>
                    <div v-if="remainingPhotos.length > 5" class="col">
                        <lightgallery :settings="{ speed: 500, plugins: pluginsData }">
                            <a class="gallery-item more-item rounded rounded-md-3" :href="remainingPhotos[5]?.url">
                                <img :alt="business.name" :src="remainingPhotos[5]?.url" />
                                <span class="gallery-item-caption fs-base">+{{ remainingPhotos.length - 5 }} <span class="d-none d-md-inline">photos</span></span>
                            </a>
                        </lightgallery>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- No photos fallback -->
        <div v-else class="row g-2 g-md-3">
            <div class="col-12">
                <img class="rounded-3 w-100" :src="business.logo || '/placeholder.png'" :alt="business.name" style="max-height: 400px; object-fit: cover;" />
            </div>
        </div>
    </div>

    <!-- Page content-->
    <section v-if="business" class="container pb-5 mb-md-4">
        <div class="row">
            <div class="col-md-7 mb-md-0 mb-3">
                <div class="card py-2 px-sm-4 px-3 shadow-sm">
                    <div class="card-body mx-n2">

                        <!-- Place info-->
                        <div class="d-flex align-items-start mb-3 pb-3 border-bottom">
                            <img :src="business.logo || '/placeholder.png'" width="60" alt="Business logo">
                            <div class="ps-2 ms-1">
                                <h3 class="h5 mb-2">{{ business.name }}</h3>
                                <ul class="list-unstyled d-flex flex-wrap fs-sm">
                                    <li class="me-2 mb-1 pe-1"><i class="fi-list mt-n1 me-1 text-primary align-middle opacity-70"></i>{{ business.category?.name }}</li>
                                    <li class="me-2 mb-1 pe-1"><i class="fi-map-pin mt-n1 me-1 align-middle opacity-70"></i>{{ business.city }}, {{ business.district }}</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Place contacts-->
                        <div class="mb-3 pb-3 border-bottom">
                            <h4 class="h5 mb-2">Contacts:</h4>
                            <ul class="nav row row-cols-sm-2 row-cols-1 gy-1">
                                <li class="col">
                                    <a class="nav-link p-0 fw-normal d-flex align-items-start" href="javascript:void(0);"><i class="fi-map-pin mt-1 me-2 align-middle opacity-70"></i>{{ business.address }}, {{ business.zipCode }}, {{ business.city }}</a>
                                </li>
                                <li v-if="business.phone" class="col">
                                    <a class="nav-link d-inline-block p-0 fw-normal d-inline-flex align-items-start" :href="`tel:${business.phone}`"><i class="fi-phone mt-1 me-2 align-middle opacity-70"></i>{{ business.phone }}</a>
                                </li>
                                <li v-if="business.website" class="col">
                                    <a class="nav-link p-0 fw-normal d-flex align-items-start" :href="business.website" target="_blank"><i class="fi-globe mt-1 me-2 align-middle opacity-60"></i>{{ business.website }}</a>
                                </li>
                                <li v-if="business.email" class="col">
                                    <a class="nav-link p-0 fw-normal d-flex align-items-start" :href="`mailto:${business.email}`"><i class="fi-mail mt-1 me-2 align-middle opacity-70"></i>{{ business.email }}</a>
                                </li>
                            </ul>
                        </div>
                        
                        <!-- Business description -->
                        <div class="mb-3 pb-3 border-bottom">
                            <h4 class="h5 mb-2">About:</h4>
                            <p class="mb-0">{{ business.description }}</p>
                        </div>
                        
                        <!-- Follow-->
                        <div v-if="hasSocialMedia" class="d-flex align-items-center">
                            <h4 class="h5 mb-0 me-3">Follow:</h4>
                            <div class="text-nowrap">
                                <a v-if="business.facebook" class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2" :href="business.facebook" target="_blank">
                                    <i class="fi-facebook"></i>
                                </a>
                                <a v-if="business.instagram" class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2" :href="business.instagram" target="_blank">
                                    <i class="fi-instagram"></i>
                                </a>
                                <a v-if="business.twitter" class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2" :href="business.twitter" target="_blank">
                                    <i class="fi-twitter"></i>
                                </a>
                                <a v-if="business.linkedin" class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle" :href="business.linkedin" target="_blank">
                                    <i class="fi-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Location (Map)-->
            <div class="col-md-5">
                <div class="position-relative bg-size-cover bg-position-center bg-repeat-0 h-100 rounded-3" :style="`background-image: url(${map}); min-height: 250px;`">
                    <div class="d-flex h-100 flex-column align-items-center justify-content-center">
                        <img class="d-block mx-auto mb-4 rounded-circle bg-white shadow" :src="business.logo || '/placeholder.png'" width="40" alt="Business logo">
                        <a v-if="business.latitude && business.longitude" class="btn btn-primary rounded-pill stretched-link" :href="`https://maps.google.com/?q=${business.latitude},${business.longitude}`" target="_blank">
                            <i class="fi-route me-2"></i>Get directions
                        </a>
                        <span v-else class="text-muted">Location not available</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>