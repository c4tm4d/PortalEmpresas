<script lang="ts" setup>
import { ref } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Header from './common/header.vue';
import Nav from './common/nav.vue';

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Conta',
                link: '/account/info'
            },
            {
                title: 'Favoritos',
            }
        ]
    }
])

definePageMeta({
    title: 'Favoritos',
    middleware: 'auth'
});
</script>
<template>
    <div class="container mt-5 mb-md-4 py-5">
        <!-- Breadcrumb-->
        <Breadcrumb :data="breadcrumbData" />

        <!-- Account header-->
        <Header />

        <!-- Page content-->
        <div class="card card-body p-4 p-md-5 shadow-sm">
            <!-- Account nav-->
            <Nav isActive="favorites" />

            <div class="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
                <h1 class="h3 mb-md-0">Favorite Listings</h1>
                <!-- Sort-->
                <div class="d-flex align-items-sm-center align-items-end">
                    <div class="d-flex flex-sm-row flex-column align-items-sm-center w-100 pe-sm-2">
                        <label class="mb-sm-0 mb-2 me-sm-2 pe-sm-1 text-nowrap" for="sortby">
                            <i class="fi-arrows-sort me-2"></i>Sort by:
                        </label>
                        <select class="form-select form-select-sm" id="sortby" style="min-width: 180px;">
                            <option>Newest</option>
                            <option>Oldest</option>
                            <option>Rating</option>
                        </select>
                    </div>
                    <a class="d-inline-block ms-sm-4 ms-3 mb-sm-0 mb-2 fs-sm fw-bold text-decoration-none text-nowrap" href="javascript:void(0);">
                        <i class="fi-x fs-xs me-2 align-middle"></i>Clear all
                    </a>
                </div>
            </div>

            <!-- Favorites grid-->
            <div class="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4 gx-3 gx-lg-4 mb-4">
                <!-- Item-->
                <div class="col pt-2">
                    <div class="position-relative">
                        <div class="position-relative mb-3">
                            <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Remove from Favorites">
                                <i class="fi-heart-filled"></i>
                            </button>
                            <img class="rounded-3" src="@/assets/img/city-guide/catalog/07.jpg" alt="Article img">
                        </div>
                        <h3 class="mb-2 fs-lg">
                            <nuxt-link class="nav-link stretched-link" to="/catalog/single">Merry Berry Motel</nuxt-link>
                        </h3>
                        <ul class="list-inline mb-0 fs-xs">
                            <li class="list-inline-item pe-1">
                                <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.5</b><span class="text-muted">&nbsp;(13)</span>
                            </li>
                            <li class="list-inline-item pe-1">
                                <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$
                            </li>
                            <li class="list-inline-item pe-1">
                                <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>0.4 km from center
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Item-->
                <div class="col pt-2">
                    <div class="position-relative">
                        <div class="position-relative mb-3">
                            <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Remove from Favorites"><i class="fi-heart-filled"></i>
                            </button>
                            <img class="rounded-3" src="@/assets/img/city-guide/catalog/08.jpg" alt="Article img">
                        </div>
                        <h3 class="mb-2 fs-lg">
                            <nuxt-link class="nav-link stretched-link" to="/catalog/single">Serenity Hotel</nuxt-link>
                        </h3>
                        <ul class="list-inline mb-0 fs-xs">
                            <li class="list-inline-item pe-1">
                                <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>5.0</b><span class="text-muted">&nbsp;(17)</span>
                            </li>
                            <li class="list-inline-item pe-1">
                                <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$$
                            </li>
                            <li class="list-inline-item pe-1">
                                <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.6 km from center
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Item-->
                <div class="col pt-2">
                    <div class="position-relative">
                        <div class="position-relative mb-3">
                            <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Remove from Favorites"><i class="fi-heart-filled"></i>
                            </button>
                            <img class="rounded-3" src="@/assets/img/city-guide/catalog/09.jpg" alt="Article img">
                        </div>
                        <h3 class="mb-2 fs-lg">
                            <nuxt-link class="nav-link stretched-link" to="/catalog/single">Repose Hotel</nuxt-link>
                        </h3>
                        <ul class="list-inline mb-0 fs-xs">
                            <li class="list-inline-item pe-1">
                                <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>5.0</b><span class="text-muted">&nbsp;(45)</span>
                            </li>
                            <li class="list-inline-item pe-1">
                                <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$
                            </li>
                            <li class="list-inline-item pe-1">
                                <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.4 km from center
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Item-->
                <div class="col pt-2">
                    <div class="position-relative">
                        <div class="position-relative mb-3">
                            <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Remove from Favorites"><i class="fi-heart-filled"></i>
                            </button>
                            <img class="rounded-3" src="@/assets/img/city-guide/catalog/10.jpg" alt="Article img">
                        </div>
                        <h3 class="mb-2 fs-lg">
                            <nuxt-link class="nav-link stretched-link" to="/catalog/single">Tranquil Hostel</nuxt-link>
                        </h3>
                        <ul class="list-inline mb-0 fs-xs">
                            <li class="list-inline-item pe-1">
                                <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.0</b><span class="text-muted">&nbsp;(15)</span>
                            </li>
                            <li class="list-inline-item pe-1">
                                <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$
                            </li>
                            <li class="list-inline-item pe-1">
                                <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.7 km from center
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Item-->
                <div class="col pt-2">
                    <div class="position-relative">
                        <div class="position-relative mb-3">
                            <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Remove from Favorites"><i class="fi-heart-filled"></i>
                            </button>
                            <img class="rounded-3" src="@/assets/img/city-guide/catalog/06.jpg" alt="Article img">
                        </div>
                        <h3 class="mb-2 fs-lg">
                            <nuxt-link class="nav-link stretched-link" to="/catalog/single">Bliss Apartment</nuxt-link>
                        </h3>
                        <ul class="list-inline mb-0 fs-xs">
                            <li class="list-inline-item pe-1">
                                <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.8</b><span class="text-muted">&nbsp;(32)</span>
                            </li>
                            <li class="list-inline-item pe-1">
                                <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$
                            </li>
                            <li class="list-inline-item pe-1">
                                <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.9 km from center
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Item-->
                <div class="col pt-2">
                    <div class="position-relative">
                        <div class="position-relative mb-3">
                            <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Remove from Favorites"><i class="fi-heart-filled"></i>
                            </button>
                            <img class="rounded-3" src="@/assets/img/city-guide/catalog/11.jpg" alt="Article img">
                        </div>
                        <h3 class="mb-2 fs-lg">
                            <nuxt-link class="nav-link stretched-link" to="/catalog/single">Soothe &amp; Stay</nuxt-link>
                        </h3>
                        <ul class="list-inline mb-0 fs-xs">
                            <li class="list-inline-item pe-1">
                                <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.6</b><span class="text-muted">&nbsp;(40)</span>
                            </li>
                            <li class="list-inline-item pe-1">
                                <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$
                            </li>
                            <li class="list-inline-item pe-1">
                                <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>2.4 km from center
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Load more-->
            <a class="d-inline-block py-sm-2 fw-bold text-decoration-none" href="javascript:void(0);">
                <i class="fi-refresh me-2 align-middle"></i>Load more
            </a>
        </div>
    </div>
</template>