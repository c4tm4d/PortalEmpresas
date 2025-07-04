<script lang="ts" setup>
import Header from './common/header.vue';
import RecentlyViewed from './common/recently-view.vue'

definePageMeta({
    title: 'Business Info',
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
    title: business.value?.name ? `${business.value.name} - Info` : 'Business Info'
}));
</script>

<template>
    <!-- Page header-->
   <Header :title="business?.name" :subtitle="business?.category?.name" isActive="single-info" />

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

    <!-- Page content -->
    <section v-else-if="business" class="container pb-5 mb-md-4">
        <div class="row">
            <!-- Left column-->
            <div class="col-md-7 mb-md-0 mb-4 pb-md-0 pb-2">
                <h2 class="h4">About</h2>
                <ul class="list-unstyled">
                    <li>
                        <i class="fi-list mt-n1 me-1 text-primary align-middle"></i><b>{{ business.category?.name }}</b>
                    </li>
                    <li><i class="fi-map-pin mt-n1 me-1 align-middle opacity-70"></i>{{ business.city }}, {{ business.district }}</li>
                    <li v-if="business.website"><i class="fi-globe mt-n1 me-1 align-middle opacity-70"></i>{{ business.website }}</li>
                </ul>
                <div class="mb-4 pb-md-3">
                    <p class="mb-1">{{ business.description }}</p>
                </div>
                <!-- Amenities-->
                <div class="mb-4 pb-md-3">
                    <h2 class="h4">Amenities</h2>
                    <ul class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li class="col"><i class="fi-wifi mt-n1 me-2 fs-lg align-middle"></i>Free WiFi</li>
                        <li class="col">
                            <i class="fi-swimming-pool mt-n1 me-2 fs-lg align-middle"></i>2 swimming pools
                        </li>
                        <li class="col"><i class="fi-pet mt-n1 me-2 fs-lg align-middle"></i>Pets-friendly</li>
                        <li class="col">
                            <i class="fi-parking mt-n1 me-2 fs-lg align-middle"></i>Free parking
                        </li>
                        <li class="col"><i class="fi-spa mt-n1 me-2 fs-lg align-middle"></i>Spa lounge</li>
                        <li class="col"><i class="fi-cafe mt-n1 me-2 fs-lg align-middle"></i>Restaurant</li>
                        <li class="col">
                            <i class="fi-hotel-bell mt-n1 me-2 fs-lg align-middle"></i>Room service
                        </li>
                        <li class="col"><i class="fi-cocktail mt-n1 me-2 fs-lg align-middle"></i>Bar</li>
                        <li class="col">
                            <i class="fi-dumbell mt-n1 me-2 fs-lg align-middle"></i>Fitness Center
                        </li>
                    </ul>
                    <div class="collapse" id="seeMoreAmenities">
                        <ul class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                            <li class="col"><i class="fi-dish mt-n1 me-2 fs-lg align-middle"></i>Dishwasher</li>
                            <li class="col">
                                <i class="fi-thermometer mt-n1 me-2 fs-lg align-middle"></i>Heating
                            </li>
                        </ul>
                    </div>
                    <a class="collapse-label collapsed" data-bs-target="#seeMoreAmenities" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMoreAmenities"></a>
                </div>
                <!-- Room types-->
                <div class="mb-4 pb-md-3">
                    <h2 class="h4">Room types</h2>
                    <ul class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li class="col">
                            <i class="fi-no-smoke mt-n1 me-2 fs-lg align-middle"></i>Non-smoking rooms
                        </li>
                        <li class="col">
                            <i class="fi-single-bed mt-n1 me-2 fs-lg align-middle"></i>Single rooms
                        </li>
                        <li class="col">
                            <i class="fi-double-bed mt-n1 me-2 fs-lg align-middle"></i>Family suites
                        </li>
                    </ul>
                </div>
                <!-- Awards-->
                <h2 class="h4">Awards</h2>
                <ul class="list-unstyled">
                    <li class="d-flex align-items-center mb-2">
                        <img class="flex-shrink-0 me-2" src="@/assets/img/city-guide/single/awards/01.jpg" width="40" alt="Award logo" />
                        <div>2020 Traveler's Choice</div>
                    </li>
                    <li class="d-flex align-items-center mb-2">
                        <img class="flex-shrink-0 me-2" src="@/assets/img/city-guide/single/awards/02.jpg" width="40" alt="Award logo" />
                        <div>TUI Top Quality 2020</div>
                    </li>
                    <li class="d-flex align-items-center mb-2">
                        <img class="flex-shrink-0 me-2" src="@/assets/img/city-guide/single/awards/03.jpg" width="40" alt="Award logo" />
                        <div>TUI Holly 2019</div>
                    </li>
                </ul>
                <hr class="my-4" />
                <!-- Payment-->
                <div class="d-lg-flex align-items-center pb-2 pb-lg-0">
                    <h4 class="fs-lg mb-lg-0">Cards accepted at this hotel:</h4>
                    <div class="ps-lg-3">
                        <img class="me-2 border rounded-1 shadow-sm" src="@/assets/img/city-guide/single/payment/visa.svg" width="54" alt="Visa" />
                        <img class="me-2 border rounded-1 shadow-sm" src="@/assets/img/city-guide/single/payment/mastercard.svg" width="54" alt="Mastercard" />
                        <img class="me-2 border rounded-1 shadow-sm" src="@/assets/img/city-guide/single/payment/maestro.svg" width="54" alt="Maestro" />
                        <img class="border rounded-1 shadow-sm" src="@/assets/img/city-guide/single/payment/american-express.svg" width="54" alt="American Express" />
                    </div>
                </div>
            </div>
            <!-- Sidebar-->
            <aside class="col-md-5">
                <!-- Place card-->
                <div class="card mb-4 p-2 shadow-sm">
                    <div class="card-body">
                        <!-- Place info-->
                        <div class="d-flex align-items-start mb-3 pb-2 border-bottom">
                            <img :src="business.logo || '/placeholder.png'" width="60" alt="Business logo" />
                            <div class="ps-2 ms-1">
                                <h3 class="h5 mb-2">{{ business.name }}</h3>
                                <ul class="list-unstyled d-flex flex-wrap fs-sm">
                                    <li class="me-2 mb-1 pe-1">
                                        <i class="fi-list mt-n1 me-1 text-primary align-middle opacity-70"></i>{{ business.category?.name }}
                                    </li>
                                    <li class="me-2 mb-1 pe-1">
                                        <i class="fi-map-pin mt-n1 me-1 align-middle opacity-70"></i>{{ business.city }}, {{ business.district }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Place contacts-->
                        <div class="mb-3 pb-3 border-bottom">
                            <h4 class="h5 mb-2">Contacts:</h4>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2">
                                    <a class="nav-link p-0 fw-normal d-flex align-items-start" href="javascript:void(0);"><i class="fi-map-pin mt-1 me-2 align-middle opacity-70"></i>{{ business.address }}, {{ business.zipCode }}, {{ business.city }}</a>
                                </li>
                                <li v-if="business.phone" class="nav-item mb-2">
                                    <a class="nav-link d-inline-block p-0 fw-normal d-inline-flex align-items-start" :href="`tel:${business.phone}`"><i class="fi-phone mt-1 me-2 align-middle opacity-70"></i>{{ business.phone }}</a>
                                </li>
                                <li v-if="business.website" class="nav-item mb-2">
                                    <a class="nav-link p-0 fw-normal d-flex align-items-start" :href="business.website" target="_blank"><i class="fi-globe mt-1 me-2 align-middle opacity-60"></i>{{ business.website }}</a>
                                </li>
                                <li v-if="business.email" class="nav-item">
                                    <a class="nav-link p-0 fw-normal d-flex align-items-start" :href="`mailto:${business.email}`"><i class="fi-mail mt-1 me-2 align-middle opacity-70"></i>{{ business.email }}</a>
                                </li>
                            </ul>
                        </div>
                        <!-- Business info -->
                        <div class="mb-3 pb-4 border-bottom">
                            <div class="row row-cols-1">
                                <div class="col mb-3">
                                    <h4 class="h5 mb-0">
                                        <span class="fs-4">{{ business.category?.name }}</span>
                                    </h4>
                                </div>
                                <div class="col">
                                    <a v-if="business.website" class="btn btn-primary btn-lg rounded-pill w-sm-auto w-100" :href="business.website" target="_blank">Visit Website<i class="fi-chevron-right fs-sm ms-2"></i>
                                    </a>
                                    <span v-else class="text-muted">No website available</span>
                                </div>
                            </div>
                        </div>
                        <!-- Place following-->
                        <div v-if="business.facebook || business.instagram || business.twitter || business.linkedin" class="d-flex align-items-center">
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
                <!-- Location (Map)-->
                <div class="position-relative">
                    <img class="rounded-3" src="@/assets/img/city-guide/single/map-sm.jpg" alt="Map" />
                    <div class="d-flex w-100 h-100 flex-column align-items-center justify-content-center position-absolute top-0 start-0">
                        <img class="d-block mx-auto mb-4 rounded-circle bg-white shadow" src="@/assets/img/city-guide/brands/hotel.svg" width="40" alt="Place logo" />
                        <a class="btn btn-primary rounded-pill stretched-link" href="javascript:void(0);">
                            <i class="fi-route me-2"></i>Get directions
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    </section>

    <RecentlyViewed />
</template>
