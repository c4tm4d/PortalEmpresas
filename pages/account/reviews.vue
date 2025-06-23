<script lang="ts" setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Header from './common/header.vue'
import Nav from './common/nav.vue'

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Account',
                link: '/account/info'
            },
            {
                title: 'Reviews'
            }
        ]
    }
])

definePageMeta({
    title: 'Account - Reviews',
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
            <Nav isActive="reviews" />

            <div class="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
                <h1 class="h3 mb-md-0">Your reviews</h1>
                <!-- Sort-->
                <div class="d-flex align-items-sm-center align-items-end">
                    <div class="d-flex flex-sm-row flex-column align-items-sm-center w-100 pe-sm-2">
                        <label class="mb-sm-0 mb-2 me-sm-2 pe-sm-1 text-nowrap" for="sortby">
                            <i class="fi-arrows-sort me-2"></i>Sort by:
                        </label>
                        <select class="form-select form-select-sm" id="sortby" style="min-width: 180px">
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

            <!-- Review-->
            <div class="row mb-4 pb-4 border-bottom">
                <div class="col-md-3 mb-md-0 mb-3">
                    <h2 class="mb-2 fs-base">
                        <span class="fw-normal me-1">For:</span>
                        <nuxt-link class="nav-link d-inline-block p-0" to="/catalog/single">Simon Rock Concert</nuxt-link>
                    </h2>
                    <div class="mb-md-3 mb-2">
                        <span class="star-rating">
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star"></i>
                            <i class="star-rating-icon fi-star"></i>
                            <i class="star-rating-icon fi-star"></i>
                        </span>
                    </div>
                    <span class="fs-sm text-muted">Dec 17, 2020</span>
                </div>
                <div class="col-md-9">
                    <p class="mb-3">
                        Quam in vel diam phasellus eleifend. Tincidunt libero arcu sapien vestibulum volutpat.
                        Ipsum tellus fames amet odio orci urna, nec sed. Aenean viverra est faucibus mauris cras
                        dapibus enim, ullamcorper purus. Morbi odio tempor orci accumsan.
                    </p>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <button class="btn-like" type="button">
                                <i class="fi-like"></i><span>(3)</span>
                            </button>
                            <div class="border-end me-1">&nbsp;</div>
                            <button class="btn-dislike" type="button">
                                <i class="fi-dislike"></i><span>(0)</span>
                            </button>
                        </div>
                        <button class="btn btn-link py-1 px-2 opacity-90" data-bs-toggle="tooltip" data-bs-title="Delete">
                            <i class="fi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Review-->
            <div class="row mb-4 pb-4 border-bottom">
                <div class="col-md-3 mb-md-0 mb-3">
                    <h2 class="mb-2 fs-base">
                        <span class="fw-normal me-1">For:</span>
                        <nuxt-link class="nav-link d-inline-block p-0" to="/catalog/single">Dunkin' Donuts</nuxt-link>
                    </h2>
                    <div class="mb-md-3 mb-2">
                        <span class="star-rating">
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star"></i>
                        </span>
                    </div>
                    <span class="fs-sm text-muted">Dec 1, 2020</span>
                </div>
                <div class="col-md-9">
                    <p class="mb-3">
                        Tempus cras felis dui volutpat neque, viverra facilisi. Scelerisque non aliquam morbi
                        eleifend aliquet elementum et urna. Proin facilisis ut semper adipiscing gravida urna,
                        integer.
                    </p>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <button class="btn-like" type="button">
                                <i class="fi-like"></i><span>(0)</span>
                            </button>
                            <div class="border-end me-1">&nbsp;</div>
                            <button class="btn-dislike" type="button">
                                <i class="fi-dislike"></i><span>(1)</span>
                            </button>
                        </div>
                        <button class="btn btn-link py-1 px-2 opacity-90" data-bs-toggle="tooltip" data-bs-title="Delete">
                            <i class="fi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Review-->
            <div class="row mb-4 pb-4 border-bottom">
                <div class="col-md-3 mb-md-0 mb-3">
                    <h2 class="mb-2 fs-base">
                        <span class="fw-normal me-1">For:</span>
                        <nuxt-link class="nav-link d-inline-block p-0" to="/catalog/single">Grand Resort &amp; Snuxt-linka</nuxt-link>
                    </h2>
                    <div class="mb-md-3 mb-2">
                        <span class="star-rating">
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star-filled active"></i>
                        </span>
                    </div>
                    <span class="fs-sm text-muted">Oct 28, 2020</span>
                </div>
                <div class="col-md-9">
                    <p class="mb-3">
                        Blandit cras integer placerat sem quisque. Venenatis dictumst mi mattis phasellus in
                        sollicitudin. Nisl, et rhoncus pellentesque volutpat.
                    </p>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <button class="btn-like" type="button">
                                <i class="fi-like"></i><span>(2)</span>
                            </button>
                            <div class="border-end me-1">&nbsp;</div>
                            <button class="btn-dislike" type="button">
                                <i class="fi-dislike"></i><span>(1)</span>
                            </button>
                        </div>
                        <button class="btn btn-link py-1 px-2 opacity-90" data-bs-toggle="tooltip" data-bs-title="Delete">
                            <i class="fi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Review-->
            <div class="row mb-4">
                <div class="col-md-3 mb-md-0 mb-3">
                    <h2 class="mb-2 fs-base">
                        <span class="fw-normal me-1">For:</span>
                        <nuxt-link class="nav-link d-inline-block p-0" to="/catalog/single">Pina Pizza Restaurant</nuxt-link>
                    </h2>
                    <div class="mb-md-3 mb-2">
                        <span class="star-rating">
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star-filled active"></i>
                            <i class="star-rating-icon fi-star-filled active"></i>
                        </span>
                    </div>
                    <span class="fs-sm text-muted">Oct 22, 2020</span>
                </div>
                <div class="col-md-9">
                    <p class="mb-3">
                        Nec augue ut senectus quisque diam quis. At augue accumsan, in bibendum. A eget et, eget
                        quisque egestas netus vel. Velit, aliquet turpis convallis ullamcorper. Scelerisque
                        sagittis condimentum pretium in vitae etiam lacinia quis amet. Porttitor consequat,
                        sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus
                        vitae etiam scelerisque. Quam in vel diam phasellus eleifend.
                    </p>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <button class="btn-like" type="button">
                                <i class="fi-like"></i><span>(3)</span>
                            </button>
                            <div class="border-end me-1">&nbsp;</div>
                            <button class="btn-dislike" type="button">
                                <i class="fi-dislike"></i><span>(0)</span>
                            </button>
                        </div>
                        <button class="btn btn-link py-1 px-2 opacity-90" data-bs-toggle="tooltip" data-bs-title="Delete">
                            <i class="fi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
