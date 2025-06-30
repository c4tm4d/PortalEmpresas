<script lang="ts" setup>
import { ref } from 'vue';
import { accommodationData } from './data/index';
import Sidebar from './sidebar.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Encontrar Empresas',
            },
        ]
    }
])

definePageMeta({
    title: 'Encontrar Empresas',
});

</script>
<template>
    <div class="container-fluid mt-5 pt-5 p-0">
        <div class="row g-0 mt-n3">

            <Sidebar />

            <!-- Page content-->
            <div class="col-lg-8 col-xl-9 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                <!-- Map popup-->
                <div class="map-popup invisible" id="map">
                    <button class="btn btn-icon btn-light btn-sm shadow-sm rounded-circle" type="button" data-bs-toggle-class="invisible" data-bs-target="#map"><i class="fi-x fs-xs"></i></button>
                    <div class="interactive-map" data-map-options-json="json/map-options-city-guide.json"></div>
                </div>

                <!-- Breadcrumb-->
                <Breadcrumb :data="breadcrumbData" />

                <!-- Title-->
                <div class="d-sm-flex align-items-center justify-content-between pb-3 pb-sm-4">
                    <h1 class="h2 mb-sm-0">Encontrar Empresas</h1>
                    <a class="d-inline-block fw-bold text-decoration-none py-1" href="javascript:void(0);" data-bs-toggle-class="invisible" data-bs-target="#map"><i class="fi-map me-2"></i>Map view</a>
                </div>
                <!-- Sorting-->
                <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2">
                    <div class="d-flex align-items-center flex-shrink-0">
                        <label class="fs-sm me-2 pe-1 text-nowrap" for="sortby"><i class="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                        <select class="form-select form-select-sm" id="sortby">
                            <option>Newest</option>
                            <option>Popularity</option>
                            <option>Low - High Price</option>
                            <option>High - Low Price</option>
                            <option>High rating</option>
                            <option>Average Rating</option>
                        </select>
                    </div>
                    <hr class="d-none d-sm-block w-100 mx-4">
                    <div class="d-none d-sm-flex align-items-center flex-shrink-0 text-muted"><i class="fi-check-circle me-2"></i><span class="fs-sm mt-n1">148 results</span></div>
                </div>

                <!-- Catalog grid-->
                <div class="row row-cols-xl-3 row-cols-sm-2 row-cols-1 gy-4 gx-3 gx-xxl-4 py-4">
                    <!-- Item-->
                    <div v-for="(item, index) in accommodationData" :key="index" class="col pb-sm-2">
                        <article class="position-relative">
                            <div class="position-relative mb-3">
                                <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Add to Favorites">
                                    <i class="fi-heart"></i>
                                </button>
                                <img class="rounded-3" :src="item.imageSrc" alt="Article img">
                            </div>
                            <h3 class="mb-2 fs-lg">
                                <nuxt-link class="nav-link stretched-link" :to="item.link">{{ item.title }}</nuxt-link>
                            </h3>
                            <ul class="list-inline mb-0 fs-xs">
                                <li class="list-inline-item pe-1">
                                    <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>{{ item.rating }}</b><span class="text-muted">&nbsp;({{ item.numReviews }})</span>
                                </li>
                                <li class="list-inline-item pe-1">
                                    <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>${{ item.priceRange }}
                                </li>
                                <li class="list-inline-item pe-1"><i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>{{ item.distanceFromCenter }}</li>
                            </ul>
                        </article>
                    </div>
                </div>

                <!-- Pagination-->
                <nav class="border-top pb-md-4 pt-4" aria-label="Pagination">
                    <ul class="pagination mb-1">
                        <li class="page-item d-sm-none">
                            <span class="page-link page-link-static">1 / 5</span>
                        </li>
                        <li class="page-item active d-none d-sm-block" aria-current="page">
                            <span class="page-link">1<span class="visually-hidden">(current)</span></span>
                        </li>
                        <li class="page-item d-none d-sm-block">
                            <a class="page-link" href="javascript:void(0);">2</a>
                        </li>
                        <li class="page-item d-none d-sm-block">
                            <a class="page-link" href="javascript:void(0);">3</a>
                        </li>
                        <li class="page-item d-none d-sm-block">...</li>
                        <li class="page-item d-none d-sm-block">
                            <a class="page-link" href="javascript:void(0);">8</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" aria-label="Next">
                                <i class="fi-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>